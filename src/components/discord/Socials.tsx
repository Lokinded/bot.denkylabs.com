import Email from './socials/Email';
import GitHub from './socials/GitHub';
import Spotify from './socials/Spotify';
import Twitter from './socials/Twitter';

interface CardProps {
  email?: string;
  github?: string;
  twitter?: string;
  spotify?: string;
}

export default function Socials(props: CardProps) {
  return (
    <div className="mt-6 w-full">
      <div className="flex space-x-5 text-2xl items-center justify-center">
        {props.github && GitHub(props.github)}
        {props.twitter && Twitter(props.twitter)}
        {props.spotify && Spotify(props.spotify)}
        {props.email && Email(props.email)}
      </div>
    </div>
  );
}
