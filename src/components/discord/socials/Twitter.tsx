import { TwitterLogo } from 'phosphor-react';

export default function Twitter(url: string) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
      <TwitterLogo />
    </a>
  );
}
