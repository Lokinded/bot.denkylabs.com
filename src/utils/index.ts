import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { indexContent } from '../i18n';

interface ApiProps {
  guilds: number;
  users: number;
  commands: number;
}

interface PopularGuildsProps {
  id: string;
  name: string;
  memberCount: number;
  iconURL: string;
  inviteURL: string;
}

export function GetApiData() {
  const [result, setResult] = useState<ApiProps>();

  useMemo(() => {
    fetch('http://localhost:4343/stats', {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then(res => res.json())
      .catch(() => null)
      .then(data => setResult(data));
  }, []);

  return result;
}

export function GetApiServersData() {
  const [result, setResult] = useState<PopularGuildsProps[]>();

  useMemo(() => {
    fetch('http://localhost:4343/popular-guilds', {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then(res => res.json())
      .catch(() => null)
      .then(data => setResult(data));
  }, []);

  return result;
}

export function FormatLanguage() {
  const { locale, defaultLocale } = useRouter();
  const formatLocale = locale ?? defaultLocale;

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
  })} elapsed`;
}
