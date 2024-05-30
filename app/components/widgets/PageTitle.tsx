import { IconType } from "react-icons";
import { ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  children?: ReactNode;
  icon: IconType;
}

// a stylelized page title widget - perfect
export default function PageTitle(props: Readonly<Props>) {
  return (
    <div className="my-4 rounded-lg border-b bg-slate-100 p-4 hover:bg-slate-50">
      <div className="mb-4 flex flex-col items-start justify-start md:mb-0 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-x-4">
          <props.icon className="h-6 w-6 text-slate-800" />
          <h1 className="my-2 text-xl font-semibold text-slate-700">
            {props.title}
          </h1>
        </div>
        {props.children}
      </div>
      {props.description && (
        <p className="text-sm text-slate-400">{props.description}</p>
      )}
    </div>
  );
}
