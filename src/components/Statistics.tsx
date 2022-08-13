interface CardProps {
  data: string;
  text: string;
}

export default function Statistics(props: CardProps) {
  return (
    <div className="p-[30px] justify-center items-center text-center">
      <h5 className="text-5xl justify-center text-purple-500 font-semibold">{props.data}</h5>
      <span className="text-2xl font-semibold text-blurple">{props.text}</span>
    </div>
  );
}
