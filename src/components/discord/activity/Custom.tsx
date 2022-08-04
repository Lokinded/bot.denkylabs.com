import { Data } from 'use-lanyard';

export function formatEmoji(data: Data | undefined) {
  if (!data) return null;

  const activity = data.activities.find(x => x.type === 4);
  if (!activity) return null;
  if (!activity.emoji) return null;

  if (!activity.emoji.id && activity.emoji.name) return <span className="inline-block">{activity.emoji.name}</span>;

  return <img className="inline-block" src={`https://cdn.discordapp.com/emojis/${activity.emoji.id}.png`} alt={activity.emoji.name} height={20} width={20} />;
}

export default function Custom(data: Data | undefined) {
  if (!data) return null;

  const activity = data.activities.find(x => x.type === 4);

  return (
    <div className="mt-6 w-full flex-row">
      <h5 className="ml-1 mb-1 antialiased text-xs font-bold uppercase text-gray-400">Custom status</h5>
      <div className="flex gap-2 items-center">
        {formatEmoji(data)}

        {activity?.state && <span className="flex text-sm text-gray-300"> {activity?.state}</span>}
      </div>
    </div>
  );
}
