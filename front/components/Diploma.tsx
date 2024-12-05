import Diploma from "@/app/types/Diploma";
import React from "react";

export const DiplomaComp = ({ diploma }: { diploma: Diploma}) => {
    return <article>
        <pre>{JSON.stringify(diploma, null, 2)}</pre>
    </article>
};