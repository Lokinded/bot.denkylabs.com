import { GetServerSideProps } from 'next';
import Profile from '../components/discord/Profile';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Props } from '../types';
import { developers, owners } from '../users';
import { FormatLanguage } from '../utils';
import { parseUser } from '../utils/parseUser';

export default function StaffRoute(props: Props) {
  const language = FormatLanguage();

  return (
    <main className="w-full max-w-full max-h-full h-full flex-col overflow-y-auto">
      <div className="flex h-[65px] sticky top-0 border-b border-purple-600 justify-center px-2">
        <NavBar user={props.user} />
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{language.teamPage.title}</h2>
            <p className="text-xl text-gray-500">{language.teamPage.description}</p>
          </div>
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{language.teamPage.owners}</h2>
          </div>
          <ul role="list" className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {owners.map(({ id, connections }) => {
              return <Profile key={id} id={id} github={connections.github} email={connections.email} twitter={connections.twitter} />;
            })}
          </ul>

          <div className="mt-4 space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{language.teamPage.developers}</h2>
          </div>
          <ul role="list" className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {developers.map(({ id, connections }) => {
              return <Profile key={id} id={id} github={connections.github} email={connections.email} twitter={connections.twitter} spotify={connections.spotify} />;
            })}
          </ul>
        </div>
      </div>

      <footer className="flex sticky top-0 border-t border-purple-600">
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
