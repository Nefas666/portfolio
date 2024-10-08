'use client'

import React, { useRef, useEffect } from 'react';
import {ProjectListProps } from '../models/Projects';
import ProjectItem from './project-list-item';




const ProjectList: React.FC<ProjectListProps> = ({ heroes, sorted }) => {
    const projectListRef = useRef<HTMLDivElement | null>(null);

    const filteredHeroes = heroes.filter(project => !project.name.includes('Nefas666'));
    const allProjects = [...filteredHeroes, ...sorted];

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
        <div ref={projectListRef} className="project-list h-[95%] overflow-auto relative">
            {allProjects.map(project => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;
