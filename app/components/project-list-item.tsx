'use client'

import { ProjectItemProps } from '../models/Projects';
import { formatDate } from '../utils/date-format';
import Link from "next/link";


const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => (
    <Link key={project.id} href={project.html_url} legacyBehavior>
        <div className="relative h-[25%] max-w-[80%] flex flex-col items-baseline justify-end gap-4 bg-transparent">
            <h2 className="block text-2xl lg:text-4xl text-left uppercase font-montreal text-white">{project.name}</h2>
            <span className="inline-flex text-xs font-montreal duration-1000 text-gray-50 group-hover:text-white group-hover:border-zinc-200 break-keep whitespace-nowrap">
                <time dateTime={new Date(project.created_at).toISOString()} title="Created">
                • {formatDate(project.created_at)} • 
                </time>
                
            </span>
            <span className="inline-flex text-xs lg:opacity-100 opacity-0 uppercase font-montreal duration-1000 text-gray-50 group-hover:text-white group-hover:border-zinc-200">
                {project.topics.length > 0 && project.topics.join('/')}
                </span>
            {/* <p className="text-xs font-montreal text-zinc-200 relative">{project.description}</p> */}
        </div>
    </Link>
);

export default ProjectItem;