import {IconType} from "react-icons";
import {ReactNode} from "react";

interface Props {
    title: string;
    description?: string;
    children?: ReactNode; 
    icon: IconType;
}

export default function PageTitle(props: Readonly<Props>) {
    return (
        <div className="border-b my-4 bg-slate-100 rounded-lg p-4 hover:bg-slate-50">
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mb-4 md:mb-0">
                <div className="flex items-center gap-x-4">
                    <props.icon className="w-6 h-6 text-slate-800"/>
                    <h1 className="text-xl font-semibold text-slate-700 my-2">{props.title}</h1>
                </div>
                {props.children}
            </div>
            {
                props.description && <p className="text-slate-400 text-sm">{props.description}</p>
            }
        </div>
    )
}