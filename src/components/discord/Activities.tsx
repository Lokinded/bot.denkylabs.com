import { Data } from 'use-lanyard';
import Spotify from './activity/Spotify';
import Game from './activity/Game';
import Custom from './activity/Custom';

export default function Activities(data: Data | undefined) {
  if (!data) return null;

  return (
    <header>
      {data.activities?.find(x => x.type === 4)?.state && Custom(data)}
      {data.activities?.find(x => x.type === 0) && Game(data)}
      {data.activities?.find(x => x.type === 2)?.assets?.large_image && Spotify(data)}
    </header>
  );
}