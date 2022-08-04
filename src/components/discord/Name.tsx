import { Data } from 'use-lanyard';

export default function Name(data: Data | undefined) {
  if (!data) return null;

  return (
    <header>
      <div>
        <h4 className="text-xl font-bold leading-6">
          <a href={`https://discord.com/users/${data.discord_user.id}`}>{data.discord_user.username}</a>
          <span className="font-normal text-gray-400 text-lg">#{data.discord_user.discriminator}</span>
        </h4>
      </div>
    </header>
  );
}
