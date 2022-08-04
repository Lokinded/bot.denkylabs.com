import { Data } from 'use-lanyard';

export default function Spotify(data: Data | undefined) {
  if (!data) return null;

  return (
    <header>
      <h5 className="ml-1 mb-1 antialiased text-xs font-bold uppercase text-gray-400">Listening on Spotify</h5>
      <div className="flex flex-row items-center rounded-lg overflow-hidden p-4 bg-[rgba(0,0,0,.2)]">
        <div className="w-20 h-20 min-w-[5rem] flex items-center justify-center relative mr-4">
          <img className="rounded-xl" src={`${data.spotify?.album_art_url}`} alt={`${data.spotify?.song} art`} />
        </div>
        <div>
          <a href={`https://open.spotify.com/track/${data.spotify?.track_id}`}>
            <h5 className="font-bold leading-4">{data.spotify?.song}</h5>
          </a>
          <span className="text-sm text-gray-300">by {data.spotify?.artist.replaceAll('; ', ', ')}</span>
        </div>
      </div>
    </header>
  );
}
