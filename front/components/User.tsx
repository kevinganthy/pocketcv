import User from "@/app/types/User";
import React from "react";
import Image from 'next/image';


export const UserComp = ({ user }: { user: User}) => {
    return <header className="flex gap-1">
        <div className="w-32">
            <Image className="object-cover h-full" src="https://placehold.co/400" alt={`Photo de ${user.firstname}`} width={400} height={400} />
        </div>

        <div className="flex flex-col gap-1 w-max">
            <h1 className="text-2xl">{user.firstname} {user.lastname}</h1>
            <p className="text-gray-500">{user.title}</p>
            <p className="text-gray-500">{user.subtitle}</p>
            <p className="mt-auto">
                <a href={`tel:${user.phone}`}>{user.phone}</a>
            </p>
            <p>
                <a href={`mailto:${user.email}`}>{user.email}</a>
            </p>
            <p className="text-gray-500">{user.location}</p>
        </div>

        <nav>
            <ul>
                <li>
                    <a href={user.linkedin} aria-label="Linked in">
                        <i className="ph-fill ph-linkedin-logo"></i>
                    </a>
                </li>
                <li>
                    <a href={user.github} aria-label="Github">
                        <i className="ph-fill ph-github-logo"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
};