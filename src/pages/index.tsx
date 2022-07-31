import Image from 'next/future/image';
import Link from 'next/link';
import logo from '../assets/denky_logo_566x566.png';
import Head from 'next/head';
import Card from '../components/Card';

export default function IndexRoute() {
  return (
    <main className="w-full max-w-full max-h-full h-full flex-row">
      <Head>
        <title>Denky Bot</title>
        <meta name="description" content="Denky is a multi-purpose bot ready to improve and boost your Discord server." />
      </Head>
      <div className="flex top-0  justify-center px-5">
        <div className="flex flex-row items-center w-full space-x-6 mt-4">
          <div className="rounded-full overflow-hidden">
            <Image src="/denky_logo.png" width="50" height="50" />
          </div>
          <div className="flex flex-row space-x-5">
            <Link href="/support" passHref>
              <a className="text-blurple font-semibold">Support</a>
            </Link>

            <Link href="/vote" passHref>
              <a className="text-blurple font-semibold">Vote</a>
            </Link>
          </div>
        </div>
        <div className="flex items-end justify-center flex-col">
          <a href="/add" className="bg-[1D1E28] border-2 border-purple-600 px-6 py-2 rounded-lg font-semibold text-white hover:bg-purple-600 transition-all duration-300 delay-100">
            Add
          </a>
        </div>
      </div>
      <div className="pt-36 pl-10">
        <span className="font-bold text-4xl">
          Its time to invite <strong>Denky</strong>!
        </span>
        <div className="flex flex-col text-base pt-5 font-normal">
          <span>
            Denky is a <strong>multi-purpose bot</strong> ready to improve and boost your Discord server.
          </span>
          <span>
            With automation functions: <strong>AntiRaid, AutoRole, Giveways, Moderation, Minigames and much more!</strong>
          </span>
        </div>
      </div>
      <div className="flex flex-row pl-10 pt-7">
        <Link href="/add">
          <button className="h-16 px-6 m-2 text-indigo-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-600 text-xl font-semibold">Invite Denky</button>
        </Link>
        <Link href="/support">
          <button className="h-16 px-6 m-2 text-indigo-100 transition-colors duration-150 bg-[#2c2f33] rounded-lg focus:shadow-outlin text-xl font-semibold">Support Server</button>
        </Link>
      </div>
      <div className="flex flex-col p-[50px]">
        <span className="flex flex-row justify-center font-extrabold mt-[30px] text-3xl">Main Functions</span>
        <span className="flex flex-row justify-center font-light mt-[30px] text-sm">Brief descriptions of some categories.</span>
        <div className="flex flex-row justify-center pt-[30px]">
          <Card title="AntiSpam" text="Are your members sending messages too fast or too many emojis? Denky helps you block such messages."></Card>
          <Card title="Lockdown" text="Block all channels on your server within seconds. And you can only unlock the channels that have been locked."></Card>
          <Card title="Captcha" text="Suffering from Selfbots? Denky can make members have to verify themselves before interacting on the server."></Card>
          <Card title="AntiRaid" text="With Denky's AntiRaid, you can make very new accounts unable to log into your server, preventing problems."></Card>
        </div>
      </div>
    </main>
  );
}
