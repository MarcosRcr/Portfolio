interface SpacerProps {
  title: string;
}

export const Spacer = (props: SpacerProps) => {
  return (
    <div id={props.title.replace(" ","-").toLowerCase()} className="flex justify-center items-center w-full bg-slate-950 my-32 h-24">
      <h2 className="text-white text-3xl italic font-bold">{props.title}</h2>
    </div>
  );
};
