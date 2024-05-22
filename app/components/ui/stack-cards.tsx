import React from "react";

interface StackItem {
  id: number;
  name: string;
  description: string;
  iconPath: string;
  linkUrl: string;
}

interface StacksProps {
  stacks: Array<StackItem>;
}

const StacksComponent: React.FC<StacksProps> = ({ stacks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-10 w-full ">
      {stacks.map((stack) => (
        <div key={stack.id} className="flex gap-5 max-md:flex-wrap">
          <div className="flex flex-1 gap-2.5 py-3.5 pr-6 pl-3.5 rounded-xl border border-solid bg-neutral-950 border-neutral-900 max-md:flex-wrap max-md:pr-5">
            <div className="flex justify-center items-center p-2.5 rounded-lg border border-solid bg-zinc-900 border-neutral-800 h-[54px] w-[54px]">
              <img
                loading="lazy"
                src={stack.iconPath}
                className="aspect-square w-[34px]"
                alt={`${stack.name} icon`}
              />
            </div>
            <div className="flex flex-col flex-1 leading-[150%]">
              <div className="text-xl font-bold text-zinc-300">
                {stack.name}
              </div>
              <div className="text-lg text-neutral-500">
                {stack.description}
              </div>
            </div>
            <a href={stack.linkUrl} target="_blank" rel="noopener noreferrer">
              <img
                loading="lazy"
                src="images/arrow-forward.svg"
                className="shrink-0 my-auto w-6 aspect-square"
                alt="Link icon"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StacksComponent;
