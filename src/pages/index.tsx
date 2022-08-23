import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/Card';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Servers from '../components/Servers';
import Statistics from '../components/Statistics';
import { Props } from '../types';
import { FormatLanguage, GetApiData } from '../utils';
import { parseUser } from '../utils/parseUser';

export default function IndexRoute(props: Props) {
  const language = FormatLanguage();
  const result = GetApiData();

  return (
    <main className="w-full max-w-full max-h-full h-full flex-col overflow-y-auto">
      <Head>
        <meta name="theme-color" content="#4e5d94" />
        <title>Denky</title>
        <meta name="description" content="Denky is a multipurpose bot ready to improve and boost your Discord server." />
        <link rel="shortcut icon" href="/denky_logo_566x566.png" />
        <meta content="/denky_logo_566x566.png" property="og:image" />
      </Head>

      <div className="flex h-[65px] sticky top-0 border-b border-purple-600 justify-center px-2">
        <NavBar user={props.user} />
      </div>

      <div className="xl:pt-20 xl:pl-10 pt-7 pl-6">
        <h1 className="font-bold text-4xl text-purple-500">{language.home.title}</h1>
        <div className="flex flex-col grow text-base pt-3 font-normal">
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

      <div className="flex flex-row xl:pt-2 xl:pl-8 pl-4 xl:px-8 xl:top-8 xl:bottom pt-4">
        <Link href="/add" passHref>
          <button type="button" className="h-16 px-6 m-2 text-indigo-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-600 text-xl font-semibold">
            {language.home.buttons.invite}
          </button>
        </Link>
        <Link href="/support" passHref>
          <button type="button" className="h-16 px-6 m-2 text-indigo-100 transition-colors duration-150 bg-[#2c2f33] rounded-lg focus:shadow-outlin text-xl font-semibold">
            {language.home.buttons.support}
          </button>
        </Link>
      </div>

      <div className="xl:flex xl:flex-col xl:justify-center items-center w-full max-w-full p-[50px]">
        <span className="flex flex-row justify-center font-extrabold mt-[30px] text-3xl">{language.functions.title}</span>
        <div className="items-center space-y-5 lg:space-y-0 flex-col lg:flex-row h-full w-full max-w-full flex lg:justify-center pt-12">
          <Card title="AntiSpam" text={language.functions.antispam} />
          <Card title="Lockdown" text={language.functions.lockdown} />
          <Card title="Captcha" text={language.functions.captcha} />
          <Card title="AntiRaid" text={language.functions.antiraid} />
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full max-w-full p-12">
          <div className="items-center xl:flex-row space-y-5 lg:space-y-0 flex-col lg:flex-row w-full max-w-full flex lg:justify-center pt-12">
            <Statistics data={result?.guilds.toString() ?? '3.500+'} text={language.home.statistics.guilds} />
            <Statistics data={result?.users.toString() ?? '750.000+'} text={language.home.statistics.users} />
            <Statistics data={result?.commands.toString() ?? '40+'} text={language.home.statistics.commands} />
          </div>
        </div>
      </div>

      <div className="xl:flex xl:flex-col xl:justify-center items-center w-full max-w-full p-[30px]">
        <span className="flex flex-row justify-center font-extrabold text-3xl">{language.home.usedBy.title.replace('{servers}', result?.guilds.toString() ?? '3.500+')}</span>
        <div className="items-center xl:flex-row space-y-5 lg:space-y-0 flex-col lg:flex-row w-full max-w-full flex lg:justify-center pt-12">
          <Servers />
        </div>
      </div>

      <div className="flex sticky top-0 border-t border-b border-purple-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">{language.cta.title}</span>
          </h2>
          <a href="/dashboard" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 sm:w-auto">
            Adicionar ao Discord
          </a>
        </div>
      </div>

      <footer className="flex sticky top-0 border-purple-600">
        <Footer />
      </footer>
    </main>
  );
}

// eslint-disable-next-line
export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
  const user = parseUser(ctx);

  return { props: { user } };
};
