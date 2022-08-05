import type { Data } from 'use-lanyard';
import { formatLanguage, formatTimestamp } from '../../../utils';

function ActivityImage(data: Data | undefined) {
  if (!data) return null;
  const activity = data.activities.find(x => x.type === 0);
  if (!activity) return null;

  if (activity && activity.application_id && activity.assets?.large_image) {
    return (
      <div className="inline-block relative">
        <img
          className="inline-block rounded-md"
          src={
            activity.assets.large_image.startsWith('mp:external')
              ? activity.assets.large_image.replace(/mp:external\/([^/]*)\/(http[s])/g, '$2:/')
              : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`
          }
        />
      </div>
    );
  }
}

export default function Game(data: Data | undefined) {
  const language = formatLanguage();
  if (!data) return null;

  const activity = data.activities.find(x => x.type === 0);
  if (!activity) return null;

  return (
    <div className="mt-6 w-full">
      <h5 className="ml-1 mb-1 antialiased text-xs font-bold uppercase text-gray-400">{language.team.card.game}</h5>
      <div className="flex flex-row items-center rounded-lg overflow-hidden p-4 bg-[rgba(0,0,0,.2)]">
        <div className="w-20 h-20 min-w-[5rem] flex items-center justify-center relative mr-4">
          {ActivityImage(data)}
          {activity?.assets?.small_image && (
            <img
              className="w-7 h-7 border-1 rounded-full bg-black border-black absolute bottom-[-7px] right-[-7px]"
              src={
                activity.assets.small_image.startsWith('mp:external')
                  ? activity.assets.small_image.replace(/mp:external\/([^/]*)\/(http[s])/g, '$2:/')
                  : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.png`
              }
              height={24}
              width={24}
            />
          )}
        </div>
        <div>
          <h5 className="font-bold leading-4">{activity.name}</h5>
          {activity.details && <p className="text-sm text-gray-300">{activity.details}</p>}
          {activity.state && <p className="text-sm text-gray-300">{activity.state}</p>}
          {activity.timestamps?.start && <p className="text-sm text-gray-300">{formatTimestamp(activity.timestamps.start)}</p>}
        </div>
      </div>
    </div>
  );
}
