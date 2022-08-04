import { GithubLogo } from 'phosphor-react';

export default function GitHub(url: string) {
  return (
    <a href={url} className="cursor-pointer" target="_blank">
      <GithubLogo />
    </a>
  );
}
