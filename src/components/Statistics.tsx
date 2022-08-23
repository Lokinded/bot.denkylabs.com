import { FormatLanguage, GetApiData } from '../utils';

export default function Statistics() {
  const language = FormatLanguage();
  const result = GetApiData();

  return (
    <div className="pt-12 sm:pt-16">
      <div className="mt-10 pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg border-2 border-purple-600 shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-purple-600 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">{language.home.statistics.guilds}</dt>
                  <dd className="order-1 text-5xl font-extrabold text-purple-600">{result?.guilds.toString() ?? '3.500+'}</dd>
                </div>
                <div className="flex flex-col border-t border-b border-purple-600 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">{language.home.statistics.users}</dt>
                  <dd className="order-1 text-5xl font-extrabold text-purple-600">{result?.users.toString() ?? '750.000+'}</dd>
                </div>
                <div className="flex flex-col border-t border-purple-600 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">{language.home.statistics.commands}</dt>
                  <dd className="order-1 text-5xl font-extrabold text-purple-600">{result?.commands.toString() ?? '40+'}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
