import { GithubLogo } from 'phosphor-react';

export default function GitHub(url: string) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
      <GithubLogo />
    </a>
  );
}
