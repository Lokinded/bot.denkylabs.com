import Image from 'next/image';
import decorationsLogo from '../../public/guilds/a_dfs_128x128.gif';
import itsATrapLogo from '../../public/guilds/its_a_trap_128x128.png';
import leagueOfHueBRLogo from '../../public/guilds/league_of_huebr_128x128.png';
import { GetApiServersData } from '../utils';

const defaultServers = [
  {
    id: '801894798641332254',
    name: "IT'S A TRAP",
    iconURL: itsATrapLogo,
    memberCount: '193,759',
    inviteURL: 'https://discord.gg/itsatrap',
  },
  {
    id: '732311394879406192',
    name: 'Decorations For Servers! ; #50K',
    iconURL: decorationsLogo,
    memberCount: '45,971',
    inviteURL: 'https://discord.gg/decorations',
  },
  {
    id: '524951730534744076',
    name: '𝐋𝐄𝐀𝐆𝐔𝐄 𝐨𝐟 𝐇𝐮𝟑BR',
    iconURL: leagueOfHueBRLogo,
    memberCount: '35,547',
    inviteURL: 'https://discord.gg/leagueofhu3br',
  },
];

export default function Servers() {
  const data = GetApiServersData();

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data ? (
        <>
          {data?.map(({ id, iconURL, name, memberCount, inviteURL }) => (
            <li key={id} className="col-span-1 rounded-lg border-2 border-purple-600 shadow divide-y divide-gray-200">
              <div className="w-full flex items-center justify-between p-6 space-x-6">
                {iconURL ? (
                  <img className="w-10 h-10 rounded-lg flex-shrink-0" src={iconURL} />
                ) : (
                  <span className="inline-block h-10 w-10 rounded-lg overflow-hidden bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                )}
                <div className="flex-1 flex-col truncate">
                  <div className="flex items-center space-x-3">
                    {inviteURL ? (
                      <a href={inviteURL}>
                        <h3 className="text-gray-100 text-sm hover:text-gray-600 transition-all duration-300 delay-100 font-medium truncate">{name}</h3>
                      </a>
                    ) : (
                      <h3 className="text-gray-100 text-sm font-medium truncate">{name}</h3>
                    )}

                    <p className="mt-1 text-gray-500 text-sm truncate">{memberCount}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </>
      ) : (
        <>
          {defaultServers?.map(({ id, iconURL, name, memberCount, inviteURL }) => (
            <li key={id} className="col-span-1 rounded-lg border-2 border-purple-600 shadow divide-y divide-gray-200">
              <div className="w-full flex items-center justify-between p-6 space-x-6">
                {iconURL ? (
                  <div className="h-[50px] w-[50px]">
                    <Image className="h-[50px] w-[50px] rounded-lg flex-shrink-0" src={iconURL} />
                  </div>
                ) : (
                  <span className="inline-block h-10 w-10 rounded-lg overflow-hidden bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                )}
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    {inviteURL ? (
                      <a href={inviteURL}>
                        <h3 className="text-gray-100 text-sm hover:text-gray-600 transition-all duration-300 delay-100 font-medium truncate">{name}</h3>
                      </a>
                    ) : (
                      <h3 className="text-gray-100 text-sm font-medium truncate">{name}</h3>
                    )}
                  </div>
                  <p className="mt-1 text-gray-500 text-sm truncate">{memberCount}+</p>
                </div>
              </div>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
