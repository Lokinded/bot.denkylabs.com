import Image from 'next/future/image';
import Link from 'next/link';
import logo from '../../public/denky_logo_566x566.png';
import { formatLanguage } from '../utils';

export default function Footer() {
  const language = formatLanguage();
  return (
    <div className="flex flex-row items-center w-full">
      <div className="md:flex md:justify-between flex-row items-center w-full">
        <div className="mb-6">
          <a className="flex items-center">
            <Image className="h-[50px] w-[50px] mr-3 rounded-full" src={logo} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Denky</span>
          </a>
          <div className="xl:w-72 items-center mt-4">
            <span>{language.footer.description}!</span>
          </div>
        </div>
        <div className="xl:grid grid-cols-2 xl:gap-8 sm:gap-6 flex-col space-y-8 xl:space-y-0 sm:grid-cols-2 xl:mt-4">
          <header>
            <h2 className="mb-4 text-sm font-semibold uppercase">Denky</h2>
            <ul>
              <li className="mb-4">
                <Link href="/add">
                  <a>{language.footer.denky.invite}</a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/github">
                  <a>Github</a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/discord">
                  <a>{language.footer.denky.support}</a>
                </Link>
              </li>
              <li>
                <Link href="mailto:opensource@denkylabs.com">
                  <a>{language.footer.denky.contact}</a>
                </Link>
              </li>
            </ul>
          </header>
          <header>
            <h2 className="mb-4 text-sm font-semibold uppercase">{language.footer.company.title}</h2>
            <ul>
              <li className="mb-4">
                <a>{language.footer.company.privacy}</a>
              </li>
              <li className="mb-4">
                <a>{language.footer.company.terms}</a>
              </li>
              <li>
                <a href="mailto:opensource@denkylabs.com">{language.footer.company.contact}</a>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </div>
  );
}
