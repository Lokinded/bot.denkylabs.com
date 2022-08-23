import { GetServerSideProps } from 'next';
import Head from 'next/head';
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
    <main className="flex-col mx-auto overflow-y-auto">
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

      <div className="sm:text-center lg:text-left xl:pt-20 xl:pl-10 pt-6 pl-1">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline text-purple-600">{language.home.title}</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{language.home.description.text}</p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="/add"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-600 transition-all duration-300 delay-100 md:py-4 md:text-lg md:px-10"
            >
              {language.home.buttons.invite}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="/support"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2c2f33] hover:bg-gray-800 transition-all duration-300 delay-100 md:py-4 md:text-lg md:px-10"
            >
              {language.home.buttons.support}
            </a>
          </div>
        </div>
      </div>

      <div className="xl:flex xl:flex-col xl:justify-center items-center w-full max-w-full">
        <div className="mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <Card />
        </div>

        <div className="mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <Statistics />
        </div>
      </div>

      <div className="xl:flex xl:flex-col xl:justify-center items-center w-full max-w-full">
        <div className="mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-extrabold text-white sm:text-4xl">
            <span className="block">{language.home.usedBy.title.replace('{servers}', result?.guilds.toString() ?? '3.500')}</span>
          </h2>
          <div className="mt-8 w-full inline-flex items-center justify-center text-base font-medium rounded-md sm:w-auto">
            <Servers />
          </div>
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
