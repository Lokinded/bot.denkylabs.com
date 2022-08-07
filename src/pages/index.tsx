import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import logo from '../assets/denky_logo_566x566.png';
import Card from '../components/Card';
import Profile from '../components/discord/Profile';
import { users } from '../users';
import { formatLanguage } from '../utils';

export default function IndexRoute() {
  const language = formatLanguage();

  return (
    <main className="w-full max-w-full max-h-full h-full flex-col overflow-y-auto">
      <Head>
        <meta name="theme-color" content="#4e5d94" />
        <title>Denky Bot</title>
        <meta name="description" content="Denky is a multipurpose bot ready to improve and boost your Discord server." />
      </Head>
      <div className="flex h-[65px] sticky top-0 border-b border-purple-600 justify-center px-5">
        <div className="flex flex-row items-center w-full justify-between">
          <div className="flex items-center w-full max-w-[1100px] space-x-5 xl:px-1">
            <div className="h-[50px] w-[50px] rounded-lg overflow-hidden">
              <Image className="h-[50px] w-[50px]" src={logo} />
            </div>

            <Link href="/support" passHref>
              <a className="text-blurple font-semibold">{language.navBar.buttons.support}</a>
            </Link>

            <Link href="/vote" passHref>
              <a className="text-blurple font-semibold">{language.navBar.buttons.vote}</a>
            </Link>
          </div>
          <div className="flex flex-row space-x-8">
            <a href="/add" className="bg-[1D1E28] border-2 border-purple-600 px-6 py-2 rounded-lg font-semibold text-white hover:bg-purple-600 transition-all duration-300 delay-100">
              {language.navBar.buttons.add}
            </a>
          </div>
        </div>
      </div>
      <div className="xl:pt-36 xl:pl-10 pt-7 pl-6">
        <h1 className="font-bold text-4xl text-purple-500">{language.home.title}</h1>
        <div className="flex flex-col grow text-base pt-5 font-normal">
          <p>
            {language.home.description.textOne}
            <strong> {language.home.description.textStronged} </strong>
            {language.home.description.textTwo}.
          </p>
          <p>
            {language.home.descriptionTwo.text} <strong>{language.home.descriptionTwo.textStronged}!</strong>
          </p>
        </div>
      </div>
      <div className="flex flex-row xl:pt-10 xl:pl-7 pt-6 pl-4">
        <Link href="/add">
          <button className="h-16 px-6 m-2 text-indigo-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-600 text-xl font-semibold">
            {language.home.buttons.invite}
          </button>
        </Link>
        <Link href="/support">
          <button className="h-16 px-6 m-2 text-indigo-100 transition-colors duration-150 bg-[#2c2f33] rounded-lg focus:shadow-outlin text-xl font-semibold">{language.home.buttons.support}</button>
        </Link>
      </div>
      <div className="xl:flex xl:flex-col xl:justify-center items-center w-full max-w-full p-[50px]">
        <span className="flex flex-row justify-center font-extrabold mt-[30px] text-3xl">{language.functions.title}</span>
        <div className="items-center space-y-5 lg:space-y-0 flex-col lg:flex-row w-full max-w-full flex lg:justify-center pt-[30px]">
          <Card title="AntiSpam" text={language.functions.antispam} />
          <Card title="Lockdown" text={language.functions.lockdown} />
          <Card title="Captcha" text={language.functions.captcha} />
          <Card title="AntiRaid" text={language.functions.antiraid} />
        </div>

        <span className="flex flex-row justify-center font-extrabold mt-[30px] pt-[50px] text-3xl">{language.team.title}</span>
        <div className="items-center xl:flex-row space-y-5 lg:space-y-0 flex-col lg:flex-row w-full max-w-full flex lg:justify-center pt-[30px]">
          {users.map(({ id, role, connections }, index) => {
            return (
              <Profile
                key={index}
                id={id}
                role={role}
                github={connections.github}
                email={connections.email}
                twitter={connections.twitter}
                spotify={connections.spotify}
                instagram={connections.instagram}
              />
            );
          })}
        </div>
      </div>
      <footer className="m-4 p-4 sm:p-6 border-solid border-2 border-purple-600 rounded-lg">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/add" className="flex items-center">
              <Image className="h-[50px] w-[50px] mr-3 rounded-full" src={logo} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Denky</span>
            </a>
            <div className="flex items-center break-words mt-4">
              <span>The best Discord bot to improve and boost your Discord server</span>
            </div>
            <div className="flex items-center break-words">
              <div className="flex items-center xl:mt-20 mt-4">
                <span className="ml-1 mb-1 antialiased text-xs font-bold uppercase text-gray-600">Copyright © 2019 - 2022 Denky Labs</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Denky</h2>
              <ul>
                <li className="mb-4">
                  <Link href="/add">
                    <a>Invite</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/github">
                    <a>Github</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/discord">
                    <a>Support Server</a>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:opensource@denkylabs.com">
                    <a>Support Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
              <ul>
                <li className="mb-4">
                  <a>Privacy Policy</a>
                </li>
                <li className="mb-4">
                  <a>Terms of use</a>
                </li>
                <li>
                  <a href="mailto:opensource@denkylabs.com">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
