import Email from './socials/Email';
import GitHub from './socials/GitHub';
import Twitter from './socials/Twitter';
import Spotify from './socials/Spotify';
import Instagram from './socials/Instagram';

interface CardProps {
  email?: string;
  github?: string;
  twitter?: string;
  spotify?: string;
  instagram?: string;
}

export default function Socials(props: CardProps) {
  return (
    <div className="mt-6 w-full">
      <div className="flex space-x-5 xl:text-2xl lg:text-2xl md:text-2xl text-3xl items-center justify-center">
        {props.github && GitHub(props.github)}
        {props.twitter && Twitter(props.twitter)}
        {props.spotify && Spotify(props.spotify)}
        {props.instagram && Instagram(props.instagram)}
        {props.email && Email(props.email)}
      </div>
    </div>
  );
}
