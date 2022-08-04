import { SpotifyLogo } from 'phosphor-react';

export default function Spotify(url: string) {
  return (
    <a href={url} className="cursor-pointer" target="_blank">
      <SpotifyLogo />
    </a>
  );
}
