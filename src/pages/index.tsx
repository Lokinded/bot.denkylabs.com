import Image from 'next/future/image';
import Link from 'next/link';
import Head from 'next/head';
import Card from '../components/Card';
import logo from '../assets/denky_logo_566x566.png';

export default function IndexRoute() {
  return (
    <main className="w-full max-w-full max-h-full h-full flex-col overflow-y-auto">
      <Head>
        <meta name="theme-color" content="#CC8899" />
        <title>Denky Bot</title>
        <meta name="description" content="Denky is a multi-purpose bot ready to improve and boost your Discord server." />
      </Head>
      <div className="flex h-[65px] sticky top-0 border-b border-purple-600 justify-center px-5">
        <div className="flex flex-row items-center w-full justify-between">
          <div className="flex items-center w-full max-w-[1100px] space-x-5 xl:px-1">
            <div className="h-[50px] w-[50px] rounded-lg overflow-hidden">
              <Image className="h-[50px] w-[50px]" src={logo} />
            </div>

            <Link href="/support" passHref>
              <a className="text-blurple font-semibold">Support</a>
            </Link>

            <Link href="/vote" passHref>
              <a className="text-blurple font-semibold">Vote</a>
            </Link>
          </div>
          <div className="flex flex-row space-x-8">
            <a href="/add" className="bg-[1D1E28] border-2 border-purple-600 px-6 py-2 rounded-lg font-semibold text-white hover:bg-purple-600 transition-all duration-300 delay-100">
              Add
            </a>
          </div>
        </div>
      </div>
      <div className="xl:pt-36 xl:pl-10 pt-7 pl-6">
        <h1 className="font-bold text-4xl text-purple-500">Its time to invite Denky!</h1>
        <div className="flex flex-col grow text-base pt-5 font-normal">
          <p>
            Denky is a <strong>multipurpose discord bot</strong> ready to improve and boost your Discord server.
          </p>
          <p>
            With automation functions: <strong>AntiRaid, AutoRole, Giveways, Moderation, Minigames and much more!</strong>
          </p>
        </div>
      </div>
      <div className="flex flex-row xl:pt-10 xl:pl-7 pt-6 pl-4">
        <Link href="/add">
          <button className="h-16 px-6 m-2 text-indigo-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-600 text-xl font-semibold">Invite Denky</button>
        </Link>
        <Link href="/support">
          <button className="h-16 px-6 m-2 text-indigo-100 transition-colors duration-150 bg-[#2c2f33] rounded-lg focus:shadow-outlin text-xl font-semibold">Support Server</button>
        </Link>
      </div>
      <div className="xl:flex xl:flex-col xl:justify-center items-center w-full max-w-full p-[50px]">
        <span className="flex flex-row justify-center font-extrabold mt-[30px] text-3xl">Main Functions</span>
        <div className="xl:flex space-y-5 xl:space-y-0 flex-col xl:flex-row w-full max-w-full flex flex-row xl:justify-center pt-[30px]">
          <Card title="AntiSpam" text="Are your members sending messages too fast or too many emojis? Denky helps you block such messages." />
          <Card title="Lockdown" text="Block all channels on your server within seconds. And you can only unlock the channels that have been locked." />
          <Card title="Captcha" text="Suffering from Selfbots? Denky can make members have to verify themselves before interacting on the server." />
          <Card title="AntiRaid" text="With Denky's AntiRaid, you can make very new accounts unable to log into your server, preventing problems." />
        </div>
      </div>
    </main>
  );
}
