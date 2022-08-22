import { Dialog, Transition } from '@headlessui/react';
import { HomeIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { GetServerSideProps } from 'next';
import { Fragment, useState } from 'react';
import { Avatar } from '../components/NavBar';
import { Props } from '../types';
import { FormatLanguage } from '../utils';
import { parseUser } from '../utils/parseUser';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function DashboardRoute(props: Props) {
  const language = FormatLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [{ name: language.dashboard.navigation.home, href: '#', icon: HomeIcon, current: true }];

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <a href="/" className="flex-shrink-0 flex items-center px-4 space-x-2">
                    <img className="h-8 w-auto rounded-lg" src="/denky_logo_566x566.png" />
                    <span className="font-semibold">Denky</span>
                  </a>

                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                        )}
                      >
                        <item.icon className={classNames(item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-4 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex bg-gray-700 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img className="inline-block h-10 w-10 rounded-full" src={Avatar(props.user?.id, props.user?.avatar, props.user?.discriminator)} />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-white">{props.user?.username}</p>
                        <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">#{props.user?.discriminator}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14"></div>
          </Dialog>
        </Transition.Root>

        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <a href="/" className="flex items-center flex-shrink-0 px-4 space-x-2">
                <img className="h-8 w-auto rounded-lg" src="/denky_logo_566x566.png" />
                <span className="font-semibold">Denky</span>
              </a>

              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                    )}
                  >
                    <item.icon className={classNames(item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
              <a className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img className="inline-block h-10 w-10 rounded-full" src={Avatar(props.user?.id, props.user?.avatar, props.user?.discriminator)} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">{props.user?.username}</p>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">#{props.user?.discriminator}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 justify-center z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-white">
                  {language.dashboard.home.welcome}, {props.user?.username}!
                </h1>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
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
