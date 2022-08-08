import type { Data } from 'use-lanyard';
import Status from './Status';

export function displayAvatar(data: Data | undefined) {
  if (!data) return 'https://cdn.discordapp.com/embed/avatars/0.png';

  if (!data.discord_user.avatar) return `https://cdn.discordapp.com/embed/avatars/${Number(data.discord_user.discriminator) % 5}.png`;
  return `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.${data.discord_user.avatar.startsWith('a_') ? 'gif' : 'png'}`;
}

export default function Avatar(data: Data | undefined) {
  return (
    <header>
      <div className="min-w-[5rem] relative inline-block pt-1">
        <img className="w-28 h-28 rounded-full mb-4 sm:mb-0 sm:mr-4" src={displayAvatar(data)} />

        {Status(data)}
      </div>
    </header>
  );
}
