import type { Data } from 'use-lanyard';
import Spotify from './activity/Spotify';
import Game from './activity/Game';

export default function Activities(data: Data | undefined) {
  if (!data || data.activities.length === 0) return null;

  return (
    <header>
      {data.activities.find(x => x.type === 0) && Game(data)}
      {data.activities.find(x => x.type === 2) && Spotify(data)}
    </header>
  );
}
