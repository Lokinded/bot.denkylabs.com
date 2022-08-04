import { TwitterLogo } from 'phosphor-react';

export default function Twitter(url: string) {
  return (
    <a href={url} className="cursor-pointer" target="_blank">
      <TwitterLogo />
    </a>
  );
}
