import { InstagramLogo } from 'phosphor-react';

export default function Instagram(url: string) {
  return (
    <a href={url} className="cursor-pointer" target="_blank">
      <InstagramLogo />
    </a>
  );
}
