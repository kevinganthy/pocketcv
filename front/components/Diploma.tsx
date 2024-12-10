import Diploma from "@/app/types/Diploma";
import React from "react";

const formatDate = (date: string): string => {
    const d = new Date(date);
    return d.getFullYear().toString();
}

export const DiplomaComp = ({ diploma }: { diploma: Diploma}) => {
    return <article className="grid grid-cols-2 place-content-around">
        <h2 className="col-span-2 text-lg lg:text-xl font-medium print:text-base">{diploma.title}</h2>
        <div className="flex gap-1 text-gray-500">
            <time dateTime={formatDate(diploma.start)}>{formatDate(diploma.start)}</time>
            <span>à</span>
            <time dateTime={formatDate(diploma.end)}>{formatDate(diploma.end)}</time>
        </div>
        <p className="bg-amber-300 rounded-full w-max px-4 text-sm ms-auto place-self-center">{diploma.location}</p>
    </article>
};