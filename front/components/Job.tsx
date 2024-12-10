import Job from "@/app/types/Job";
import React from "react";
import Image from 'next/image';

const formatDate = (date: string): string => {
    if (!date) return "aujourd'hui";
    const d = new Date(date);
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
}

export const JobComp = ({ job }: { job: Job}) => {
    return <article className="job flex flex-col gap-2">
        <header className="grid grid-cols-[1fr_auto] md:flex gap-2 items-center flex-col md:flex-row lg:grid xl:flex">
            <h2 className="me-auto text-xl font-medium">{job.title}</h2>

            <div className="flex gap-1 col-span-2">
                {job.stack.map((tech) => (
                    <Image key={tech} src={`stack/${tech}.svg`} alt={tech} width={24} height={24} />
                ))}
            </div>

            <p className="col-start-2 row-start-1 bg-amber-300 rounded-full w-max px-4 text-sm">{job.location}</p>
        </header>

        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-1 text-gray-500">
            <p className="me-auto">{job.subtitle}</p>
            <div className="flex gap-1">
                <time dateTime={formatDate(job.start)}>{formatDate(job.start)}</time>
                à
                <time dateTime={formatDate(job.end)}>{formatDate(job.end)}</time>
            </div>
        </div>

        <div className="description" dangerouslySetInnerHTML={{__html:job.description}}></div>
    </article>
};
