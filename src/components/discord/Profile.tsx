import { useLanyardWs } from 'use-lanyard';
import Activities from './Activities';
import Avatar from './Avatar';
import Name from './Name';

interface CardProps {
  id: string;
  role: string;
}

export default function Profile(props: CardProps) {
  const data = useLanyardWs(props.id);

  return (
    <div className="rounded-lg p-4 w-full max-w-xl border-purple-600 border-2 xl:ml-6 md:ml-5">
      <div className="flex flex-col items-center">
        {Avatar(data)}
        {Name(data)}

        {data && (
          <div className="flex justify-center items-center">
            <span className="text-xs text-gray-400">{props.role}</span>
          </div>
        )}
      </div>
      {Activities(data)}
    </div>
  );
}
