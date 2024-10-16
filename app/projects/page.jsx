import React from "react";
import data from "../../data.json";
import { getRepos, getPinnedRepos } from "../data";
import HomeNavigation from "../components/home-nav";
import ProjectList from "../components/project-list";
import UserInfo from "../components/user-info";

export default async function ProjectsPage({
  searchParams: { customUsername },
}) {
  const username =
    customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
  const jobrole = data.jobRole;

  const [repositories, pinnedNames] = await Promise.all([
    getRepos(username),
    getPinnedRepos(username),
  ]);

  const heroes = repositories
    .filter((project) => pinnedNames.includes(project.name))
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
  const sorted = repositories
    .filter((p) => !p.private)
    .filter((p) => !p.fork)
    .filter((p) => !p.archived)
    .filter((p) => !pinnedNames.includes(p.name))
    .filter((p) => !data.projects.heroNames.includes(username))
    .filter((p) => !data.projects.blacklist.includes(p.name))
    .sort(
      (a, b) =>
        new Date(b.updated_at ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.updated_at ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className='grid grid-cols-2 gap-4 overflow-hidden m-5 p-5 w-screen h-screen'>
      <section className='row-span-1'>
        <UserInfo username={username} jobrole={jobrole} />
        <div className='row-span-1 font-montreal gap-2'>
          <HomeNavigation customUsername={customUsername} />
        </div>
      </section>
        <ProjectList heroes={heroes} sorted={sorted} />
    </div>
  );
}
