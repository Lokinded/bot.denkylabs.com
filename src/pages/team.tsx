import Profile from '../components/discord/Profile';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { users } from '../users';
import { formatLanguage } from '../utils';

export default function TeamRoute() {
  const language = formatLanguage();

  return (
    <main className="w-full max-w-full max-h-full h-full flex-col overflow-y-auto">
      <div className="flex h-[65px] sticky top-0 border-b border-purple-600 justify-center px-5">
        <NavBar />
      </div>
      <div className="xl:flex xl:flex-col xl:justify-center items-center w-full max-w-full p-[50px]">
        <span className="flex flex-row justify-center font-extrabold mt-[30px] pt-[50px] text-3xl">{language.team.title}</span>
        <div className="items-center xl:flex-row space-y-5 lg:space-y-0 flex-col lg:flex-row w-full max-w-full flex lg:justify-center pt-[30px]">
          {users.map(({ id, role, connections }, index) => {
            return <Profile key={index} id={id} role={role} github={connections.github} email={connections.email} twitter={connections.twitter} spotify={connections.spotify} />;
          })}
        </div>
      </div>
      <footer className="flex sticky top-0 border-t border-purple-600 justify-center px-4 p-5">
        <Footer />
      </footer>
    </main>
  );
}
