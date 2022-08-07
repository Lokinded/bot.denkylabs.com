import { useRouter } from 'next/router';
import { indexContent } from '../i18n';

export function formatLanguage() {
  const { locale, defaultLocale } = useRouter();
  let formatLocale = locale;

  if (!locale) formatLocale = defaultLocale;

  return indexContent[formatLocale as keyof typeof indexContent];
}

export function formatTimestamp(start: number) {
  if (!start) return 0;
  const current = Math.floor((Date.now() - start) / 1000);
  return `${
    Math.floor(current / 60) >= 60
      ? `${Math.floor(Math.floor(current / 60) / 60).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}:`
      : ``
  }${Math.floor(Math.floor(current / 60) - Math.floor(Math.floor(current / 60) / 60) * 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${Math.floor(current % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })} ${formatLanguage().utils.formatTimestamp}`;
}
