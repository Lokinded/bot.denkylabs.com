import type { Data } from 'use-lanyard';

const StatusColor = {
  online: 'bg-online',
  idle: 'bg-idle',
  dnd: 'bg-dnd',
  offline: 'bg-offline',
};

export default function Status(data: Data | undefined) {
  if (!data) return <div className={`absolute h-6 w-6 -bottom-1 -right-1 border-[3px] border-[#1f1f1f] rounded-full mb-6 mx-5 sm:mb-3 sm:mr-7 ${StatusColor.offline}`} />;

  return <div className={`absolute h-6 w-6 -bottom-1 -right-1 border-[3px] border-[#1f1f1f] rounded-full mb-6 mx-5 sm:mb-3 sm:mr-7 ${StatusColor[data.discord_status as keyof typeof StatusColor]}`} />;
}
