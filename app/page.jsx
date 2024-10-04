import React, { Suspense } from "react";
import data from "../data.json";

import { ProfileOrganizations } from "./components/orgs";
import { RecentActivity } from "./components/recent-activity";
import { getUser } from "./data";

import HomeNavigation from "./components/home-nav";
import UserWelcome from "./components/user-welcome";
import UserInfo from "./components/user-info";

export default function Home({ searchParams }) {
  return (
    <Suspense fallback={<p className='text-lg text-zinc-500'>Loading...</p>}>
      <LandingComponent searchParams={searchParams} />
    </Suspense>
  );
}

const LandingComponent = async ({ searchParams: { customUsername } }) => {
  const username =
    customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
  const jobrole = data.jobRole;
  const bio = data.description;
  const promise = getUser(username);

  return (
      <main className='grid lg:grid-cols-2 gap-4 overflow-hidden m-5 p-5'>
        <section className='row-span-1'>
          <UserInfo username={username} jobrole={jobrole} />
          <div className='row-span-1 font-montreal gap-2'>
            <HomeNavigation customUsername={customUsername} />
          </div>
        </section>
        <section className='row-span-auto flex flex-row justify-end items-end'>
          <div className='absolute text-left right-5 bottom-5 lg:pb-5 lg:pr-5 pb-3 pr-3 animate-fade-in lg:max-w-[200px] md:max-w-[160px] max-w-[130px]'>
            <h2 className='font-montreal text-gray-50 text-sm'>
              <Suspense fallback={<p>Loading...</p>}>
                <UserWelcome promise={promise} />
                <ProfileOrganizations username={username} />
                <RecentActivity username={username} />
              </Suspense>
              <p>{bio}</p>
            </h2>
          </div>
        </section>
      </main>
  );
};
