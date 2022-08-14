import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { DiscordUser } from '../../types';
import { config } from '../../utils/config';

const OAUTH_PARAMS = new URLSearchParams({
  client_id: config.clientId,
  redirect_uri: `${config.apiUrl}/api/oauth`,
  response_type: 'code',
  scope: ['identify', 'guilds'].join(' '),
}).toString();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return res.redirect('/');

  const { code = null, error = null } = req.query;

  if (error) {
    return res.redirect(`/?error=${req.query.error}`);
  }

  if (!code || typeof code !== 'string') return res.redirect(`https://discord.com/api/oauth2/authorize?${OAUTH_PARAMS}`);

  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    grant_type: 'authorization_code',
    redirect_uri: `${config.apiUrl}/api/oauth`,
    code,
    scope: ['identify', 'guilds'].join(' '),
  }).toString();

  const { access_token = null, token_type = 'Bearer' } = await fetch('https://discord.com/api/oauth2/token', {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    body,
  }).then(response => response.json());

  if (!access_token || typeof access_token !== 'string') {
    return res.redirect(`https://discord.com/api/oauth2/authorize?${OAUTH_PARAMS}`);
  }

  const me: DiscordUser | { unauthorized: true } = await fetch('http://discord.com/api/users/@me', {
    headers: { Authorization: `${token_type} ${access_token}` },
  }).then(response => response.json());

  if (!('id' in me)) {
    return res.redirect(`https://discord.com/api/oauth2/authorize?${OAUTH_PARAMS}`);
  }

  const token = sign(me, config.jwtSecret, { expiresIn: '24h' });

  res.setHeader(
    'Set-Cookie',
    serialize(config.cookieName, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'lax',
      path: '/',
    }),
  );

  res.redirect('/');

  return res.end();
};
