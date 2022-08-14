import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/denky_logo_566x566.png';
import { Props } from '../types';
import { formatLanguage } from '../utils';

export function Avatar(userId?: string, userAvatar?: string, userDiscriminator?: string) {
  if (!userId || !userAvatar || !userDiscriminator) return 'https://cdn.discordapp.com/embed/avatars/0.png';

  if (!userAvatar) return `https://cdn.discordapp.com/embed/avatars/${Number(userDiscriminator) % 5}.png`;
  return `https://cdn.discordapp.com/avatars/${userId}/${userAvatar}.${userAvatar.startsWith('a_') ? 'gif' : 'png'}`;
}

function getAuthProfile(props: Props) {
  return (
    <div className="flex flex-row space-x-2">
      <Image className="w-7 h-7 rounded-full items-start" width={28} height={28} src={Avatar(props.user?.id, props.user?.avatar, props.user?.discriminator)} />
      <header className="text-xl font-bold leading-6">
        <span>{props.user?.username}</span>
        <span className="font-normal text-gray-400 text-lg">#{props.user?.discriminator}</span>
      </header>
    </div>
  );
}

export default function NavBar(props: Props) {
  const language = formatLanguage();

  return (
    <div className="flex flex-row items-center w-full justify-between">
      <div className="flex items-center w-full max-w-[1100px] space-x-5 xl:px-1">
        <div className="h-[50px] w-[50px] rounded-lg overflow-hidden">
          <Image className="h-[50px] w-[50px]" src={logo} />
        </div>

        <Link href="/" passHref>
          <a className="text-blurple font-semibold hover:text-purple-400">{language.navBar.buttons.home}</a>
        </Link>
      </div>
      <div className="flex flex-row space-x-8">
        <a href="/dashboard" className="bg-[1D1E28] border-2 border-purple-600 px-3 xl:px-4 py-2 rounded-lg font-semibold text-white">
          {props.user && props.user.username ? getAuthProfile(props) : 'Login'}
        </a>
      </div>
    </div>
  );
}
