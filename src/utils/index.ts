import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { indexContent } from '../i18n';

interface ApiProps {
  guilds: number;
  users: number;
  commands: number;
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

export function FormatLanguage() {
  const { locale, defaultLocale } = useRouter();
  const formatLocale = locale ?? defaultLocale;

  return indexContent[formatLocale as keyof typeof indexContent];
}
