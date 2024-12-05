import Job from "@/app/types/Job";
import React from "react";

export const JobComp = ({ job }: { job: Job}) => {
    return <article>
        <pre>{JSON.stringify(job, null, 2)}</pre>
    </article>
};