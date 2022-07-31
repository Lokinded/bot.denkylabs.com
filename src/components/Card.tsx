interface CardProps {
  text: string;
  title: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="w-72 bg-[#1D1E28] border-4 border-solid border-purple-600 rounded-lg break-words ml-6">
      <div className="p-[30px] relative">
        <h5 className="text-3xl font-bold">{props.title}</h5>
        <span className="text-xl font-thin">{props.text}</span>
      </div>
    </div>
  );
}
