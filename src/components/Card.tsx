interface CardProps {
  text: string;
  title: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="w-72 h-60 xl:w-full xl:h-[260px] bg-[#1D1E28] border-4 border-solid border-purple-600 rounded-lg break-words xl:ml-6 md:ml-5 xl:hover:bg-purple-600 xl:transition-all xl:duration-300 xl:delay-100">
      <div className="p-[30px] relative items-center">
        <h5 className="text-3xl text-blurple font-semibold">{props.title}</h5>
        <span className="md:text-sm lg:text-base xl:text-lg font-extralight">{props.text}</span>
      </div>
    </div>
  );
}
