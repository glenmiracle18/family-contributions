import {Button} from "flowbite-react";

export default function PreviewActions() {
    return (
        <div className="relative">
            <div
                className="fixed flex bottom-0 left-0 justify-center space-x-4 w-full md:w-4/5 lg:w-1/2 xxl:w-1/3 p-8 bg-slate-100/50 ">
                <Button color="blue" className="w-full">Edit</Button>
                <Button color="failure" className="w-full">Remove</Button>
            </div>
        </div>
    )
}