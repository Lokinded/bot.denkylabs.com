import { SpotifyLogo } from 'phosphor-react';

export default function Spotify(url: string) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
      <SpotifyLogo />
    </a>
  );
}
