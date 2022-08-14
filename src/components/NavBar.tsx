import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Props } from '../types';
import { FormatLanguage } from '../utils';

export function Avatar(userId?: string, userAvatar?: string, userDiscriminator?: string) {
  if (!userId || !userAvatar || !userDiscriminator) return 'https://cdn.discordapp.com/embed/avatars/0.png';

  if (!userAvatar) return `https://cdn.discordapp.com/embed/avatars/${Number(userDiscriminator) % 5}.png`;
  return `https://cdn.discordapp.com/avatars/${userId}/${userAvatar}.${userAvatar.startsWith('a_') ? 'gif' : 'png'}`;
}

function GetAuthProfile(props: Props) {
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
  const language = FormatLanguage();
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-2 px-2 md:px-5 md:block">
            <Image className="rounded-lg" height="50px" width="50px" src="/denky_logo_566x566.png" />
            <div className="md:hidden">
              <button className="p-2 rounded-md outline-none" onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 mb-3 md:block md:pb-0 px-2 md:mt-0 ${navbar ? 'block bg-[#111] border-2 rounded-lg border-purple-600' : 'hidden'}`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 p-[1.5rem] md:p-2 ">
              <li className="text-blurple font-semibold hover:text-purple-400">
                <Link href="/">
                  <a>{language.navBar.buttons.home}</a>
                </Link>
              </li>
              <li className="text-blurple font-semibold hover:text-purple-400">
                <Link href="/support">
                  <a>{language.navBar.buttons.support}</a>
                </Link>
              </li>
              <li className="text-blurple font-semibold hover:text-purple-400">
                <Link href="/vote">
                  <a>{language.navBar.buttons.vote}</a>
                </Link>
              </li>
              <li className="md:bg-[1D1E28] md:border-2 border-purple-600 md:px-3 md:py-2 rounded-lg font-semibold hover:text-purple-400">
                <Link href="/api/oauth">
                  <a>{props.user && props.user.username ? GetAuthProfile(props) : language.navBar.buttons.login}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
