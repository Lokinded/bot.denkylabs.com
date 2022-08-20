import { GetServerSideProps } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import { Props } from '../types';
import { parseUser } from '../utils/parseUser';

export default function DashboardRoute(props: Props) {
  return (
    <main className="w-full max-w-full max-h-full h-full flex-col overflow-y-auto">
      <Head>
        <meta name="theme-color" content="#4e5d94" />
        <title>Denky Dashboard</title>
        <meta name="description" content="My configuration panel." />
        <link rel="shortcut icon" href="/denky_logo_566x566.png" />
        <meta content="/denky_logo_566x566.png" property="og:image" />
      </Head>
      <div className="flex h-[65px] sticky top-0 border-b border-purple-600 justify-center px-2">
        <NavBar user={props.user} />
      </div>

      <div className="xl:pt-20 xl:pl-10 pt-7 pl-6">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-2xl">Welcome to the dashboard, {props.user?.username}!</p>
        </div>
      </div>
    </main>
  );
}

// eslint-disable-next-line
export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
  const user = parseUser(ctx);

  if (!user) {
    return {
      redirect: {
        destination: '/api/oauth',
        permanent: false,
      },
    };
  }

  return { props: { user } };
};
