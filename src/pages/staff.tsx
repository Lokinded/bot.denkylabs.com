import { GetServerSideProps } from 'next';
import Profile from '../components/discord/Profile';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Props } from '../types';
import { users } from '../users';
import { FormatLanguage } from '../utils';
import { parseUser } from '../utils/parseUser';

export default function StaffRoute(props: Props) {
  const language = FormatLanguage();

  return (
    <main className="w-full max-w-full max-h-full h-full flex-col overflow-y-auto">
      <div className="flex h-[65px] sticky top-0 border-b border-purple-600 justify-center px-2">
        <NavBar user={props.user} />
      </div>
      <div className="xl:flex xl:flex-col xl:justify-center items-center w-full max-w-full p-[50px]">
        <div className="xl:flex xl:flex-col xl:justify-center items-center w-full max-w-full p-[50px]">
          <span className="flex flex-row justify-center font-extrabold mt-[30px] pt-[50px] text-3xl">{language.teamPage.title}</span>
          <div className="items-center xl:flex-row space-y-5 lg:space-y-0 flex-col lg:flex-row w-full max-w-full flex lg:justify-center pt-[30px]">
            {users.map(({ id, role, connections }) => {
              return <Profile key={id} id={id} role={role} github={connections.github} email={connections.email} twitter={connections.twitter} spotify={connections.spotify} />;
            })}
          </div>
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
