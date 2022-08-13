import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/denky_logo_566x566.png';
import { formatLanguage } from '../utils';

export default function NavBar() {
  const language = formatLanguage();

  return (
    <div className="flex flex-row items-center w-full justify-between">
      <div className="flex items-center w-full max-w-[1100px] space-x-5 xl:px-1">
        <div className="h-[50px] w-[50px] rounded-lg overflow-hidden">
          <Image className="h-[50px] w-[50px]" src={logo} />
        </div>

        <Link href="/" passHref>
          <a className="text-blurple font-semibold hover:text-purple-400">Home</a>
        </Link>

        <Link href="/support" passHref>
          <a className="text-blurple font-semibold hover:text-purple-400">{language.navBar.buttons.support}</a>
        </Link>
      </div>
      <div className="flex flex-row space-x-8">
        <a href="/add" className="bg-[1D1E28] border-2 border-purple-600 px-6 py-2 rounded-lg font-semibold text-white hover:bg-purple-600 transition-all duration-300 delay-100">
          {language.navBar.buttons.add}
        </a>
      </div>
    </div>
  );
}
