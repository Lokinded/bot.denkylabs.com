import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Fragment } from 'react';
import { Props } from '../types';
import { FormatLanguage } from '../utils';

export function Avatar(userId?: string, userAvatar?: string, userDiscriminator?: string) {
  if (!userId || !userAvatar || !userDiscriminator) return 'https://cdn.discordapp.com/embed/avatars/0.png';

  if (!userAvatar) return `https://cdn.discordapp.com/embed/avatars/${Number(userDiscriminator) % 5}.png`;
  return `https://cdn.discordapp.com/avatars/${userId}/${userAvatar}.${userAvatar.startsWith('a_') ? 'gif' : 'png'}`;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar(props: Props) {
  const language = FormatLanguage();

  const navigation = [
    { name: language.navBar.buttons.home, href: '/', current: true },
    { name: language.navBar.buttons.add, href: '/add', current: true },
    { name: language.navBar.buttons.support, href: '/support', current: true },
    { name: language.navBar.buttons.vote, href: '/vote', current: true },
  ];

  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto xl:max-w-full xl:px-6">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img className="rounded-lg block lg:hidden h-12 w-auto" src="/denky_logo_566x566.png" />
                  <img className="rounded-lg hidden lg:block h-12 w-auto" src="/denky_logo_566x566.png" />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(item.current ? ' text-white' : 'text-gray-300', 'px-3 py-2 rounded-md text-sm font-medium')}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      {props.user ? (
                        <img className="h-8 w-8 rounded-full" src={Avatar(props.user?.id, props.user?.avatar, props.user?.discriminator)} />
                      ) : (
                        <div className="border-2 border-purple-600 rounded-lg px-3 py-2 hover:bg-purple-600 transition-all duration-300 delay-100">
                          <Link href="/api/oauth">
                            <a>{language.navBar.buttons.login}</a>
                          </Link>
                        </div>
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="/dashboard" className={classNames(active ? 'bg-purple-600 rounded-lg py-2' : '', 'block px-4 py-2 text-sm text-white')}>
                            {language.navBar.buttons.dashboard}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="api/logout" className={classNames(active ? 'bg-purple-600 rounded-lg py-2' : '', 'block px-4 py-2 text-sm text-white')}>
                            {language.navBar.buttons.logout}
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden pt-2">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg text-sm">
                {navigation.map(item => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
