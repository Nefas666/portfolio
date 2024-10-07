'use client'

import React, { useRef, useEffect } from 'react';
import Link from "next/link";
import {Project, ProjectListProps} from '../models/Projects'
import {formatDate} from '../utils/date-format'


const ProjectList: React.FC<ProjectListProps> = ({ heroes, sorted }) => {
    const projectListRef = useRef<HTMLDivElement | null>(null);

    const filteredHeroes = heroes.reduce((acc, project) => {
        if (!project.name.includes('Nefas666')) {
            acc.push(project);
        }
        return acc;
    }, [] as Project[]);
    

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

    const allProjects = [...filteredHeroes, ...sorted];

    return (
        <div
            ref={projectListRef}
            className="project-list h-screen overflow-auto relative"
        >

            {allProjects.map((project) => (
                <Link key={project.id} href={project.html_url} legacyBehavior>
                    <div className="relative h-[22%] max-w-[80%] flex flex-col items-baseline justify-end gap-4 bg-transparent">
                        <h2 className="block text-4xl text-left uppercase font-montreal text-white">{project.name}</h2>
                        <span className="inline-flex text-xs font-montreal duration-1000 text-gray-50 group-hover:text-white group-hover:border-zinc-200">
                            <time dateTime={new Date(project.created_at).toISOString()} title="Created">
                                {formatDate(project.created_at)}
                            </time>
                            <span className="inline-flex text-xs uppercase font-montreal duration-1000 text-gray-50 group-hover:text-white group-hover:border-zinc-200">
                                ///{project.topics.join('/')}
                                </span>

                        </span>
                        <p className="text-xs font-montreal text-zinc-200 relative">{project.description}</p>
                    </div>
                </Link>

            ))}


        </div>
    );
};

export default ProjectList;
