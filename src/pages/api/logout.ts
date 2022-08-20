import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { config } from '../../utils/config';

const { cookieName } = config;

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', [
    serialize(cookieName, '', {
      maxAge: -1,
      path: '/',
    }),
  ]);

  res.writeHead(302, { Location: '/' });
  res.end();
};
