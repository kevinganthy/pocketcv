import User from "@/app/types/User";
import React from "react";
import Image from 'next/image';


export const UserComp = ({ user }: { user: User}) => {
    return <header className="flex gap-5 bg-white p-5 rounded w-full print:w-max print:bg-slate-100 print:rotate-1 print:drop-shadow-lg">
        <div className="w-32">
            <Image className="object-cover h-full rounded" src="kevin.webp" alt={`Photo de ${user.firstname}`} width={400} height={400} />
        </div>

        <div className="flex flex-col gap-1">
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

        <nav className="ms-auto mt-1 print:hidden">
            <ul className="flex flex-col gap-2">
                <li>
                    <a href={user.linkedin} aria-label="Linked in">
                        <Image src="/stack/linkedin.svg" alt="Linked in" width={24} height={24} />
                    </a>
                </li>
                <li>
                    <a href={user.github} aria-label="Github">
                    <Image src="/stack/github.svg" alt="Linked in" width={24} height={24} />
                    </a>
                </li>
            </ul>
        </nav>
    </header>
};