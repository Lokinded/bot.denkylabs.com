import { ChatIcon, CheckCircleIcon, MoonIcon, UserGroupIcon } from '@heroicons/react/outline';
import { FormatLanguage } from '../utils';

export default function Features() {
  const language = FormatLanguage();

  const features = [
    {
      name: 'AntiSpam',
      description: language.functions.antispam,
      icon: ChatIcon,
    },
    {
      name: 'Lockdown',
      description: language.functions.lockdown,
      icon: MoonIcon,
    },
    {
      name: 'Captcha',
      description: language.functions.captcha,
      icon: CheckCircleIcon,
    },
    {
      name: 'AntiRaid',
      description: language.functions.antiraid,
      icon: UserGroupIcon,
    },
  ];

  return (
    <div className="py-12 flex sticky top-0 border-t border-b border-purple-600">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-purple-600 sm:text-4xl">{language.functions.title}</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-100 lg:mx-auto">{language.functions.description}</p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
