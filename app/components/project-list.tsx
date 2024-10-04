'use client'

import React, { useRef, useEffect } from 'react';
import Link from "next/link";
import { StarIcon, MarkGithubIcon } from '@primer/octicons-react';


interface Project {
    name: string;
    id: string;
    description: string;
    stargazers_count: number;
    created_at: string | number | Date;
    updated_at?: string;
    html_url: string;
}

interface ProjectListProps {
    heroes: Project[];
    sorted: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ heroes, sorted }) => {
    const projectListRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (projectListRef.current) {
            const scrollPosition = projectListRef.current.scrollTop;
            projectListRef.current.style.transform = `translate3d(0, -${scrollPosition}px, 0)`;
        }
    };

    useEffect(() => {
        const currentRef = projectListRef.current;

        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div
            ref={projectListRef}
            className="project-list h-screen overflow-auto relative "
        >
            
            {heroes.map((project) => (
                <Link key={project.id} href={project.html_url} legacyBehavior>
                    <div className="relative h-[35%] flex flex-col items-start justify-start gap-4 bg-transparent">
                        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200">
                            <time dateTime={new Date(project.created_at).toISOString()} title="Created">
                                {new Date(project.created_at).toISOString().substring(0, 10)}
                            </time>
                        </span>
                        <h2 className="block text-4xl text-left font-montreal text-white">{project.name}</h2>
                        <p className="text-sm font-montreal text-zinc-200 relative">{project.description}</p>
                    </div>
                </Link>
            ))}

            {/* {sorted.map((project) => (
                <div key={project.id} className="flex items-center justify-center border-b border-gray-100 hover:border-gray-50 hover:text-gray-50 bg-transparent">
                    <h2 className="text-xl font-bold text-gray-800">{project.name}</h2>
                </div>
            ))} */}
        </div>
    );
};

export default ProjectList;
