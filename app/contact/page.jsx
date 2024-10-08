import { MarkGithubIcon, MailIcon, PersonIcon } from "@primer/octicons-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import HomeNavigation from "../components/home-nav";
import UserInfo from "../components/user-info";
import data from "../../data.json";
import { getUser, getSocialAccounts } from "../data";

// TODO: make it edge once Turbopack supports it.
export const runtime = "nodejs";

export default async function Contacts({ searchParams: { customUsername } }) {
  const username =
    customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
  const jobrole = data.jobRole;

  // Get both user and socials in parallel.
  const userData = getUser(username);
  const socialsData = getSocialAccounts(username);
  const [user, githubSocials] = await Promise.all([userData, socialsData]);
  const email = user.email || data.email;
  const contacts = [];
  if (email) {
    contacts.push({
      icon: <MailIcon size={20} />,
      href: "mailto:" + email,
      label: "Email",
      handle: email,
    });
  }
  contacts.push({
    icon: <MarkGithubIcon size={20} />,
    href: "https://github.com/" + username,
    label: "Github",
    handle: username,
  });

  githubSocials.forEach((s) => {
    switch (s.provider) {
      case "linkedin":
        // all those string transformation from 46 to 48 are made because my profile url has my birthdate in it
        const linkedinHandle = s.url.includes("/in/")
          ? s.url.split("/in/")[1]
          : s.url.split("/").pop();
        const cleanedHandle = linkedinHandle.replace(/-/g, " ");
        const finalHandle = cleanedHandle.slice(0, -5);
        contacts.push({
          icon: <FaLinkedin size={20} />,
          href: s.url,
          label: s.provider,
          // Extract last aprt of the url.
          handle: finalHandle,
        });
        break;
      case "twitter":
        contacts.push({
          icon: <FaXTwitter size={20} />,
          href: s.url,
          label: s.provider,
          // Extract last aprt of the url.
          handle: s.url.split("/").pop(),
        });
        break;
      default:
        contacts.push({
          icon: <PersonIcon size={20} />,
          href: s.url,
          // Extract domain from url.
          label: s.url.split("/")[2],
          // Extract last part of the url. Might not make sense in some cases.
          // handle: s.url.split("/").pop(),
        });
        break;
    }
  });

  return (
    <div className='grid grid-cols-2 gap-4 overflow-hidden p-5 w-screen h-screen'>
      <section className='row-span-1 m-5'>
        <UserInfo username={username} jobrole={jobrole} />
        <div className='row-span-1 font-montreal gap-2'>
          <HomeNavigation customUsername={customUsername} />
        </div>
      </section>
      <div className='container flex items-center justify-center px-4 mx-auto'>
        <div className='grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-24'>
          {contacts.map((s) => {
            return (
              <Link
                key={s.label}
                href={s.href}
                target='_blank'
                className='p-4 relative font-montreal flex flex-col items-center gap-4 duration-700'>
                <span
                  className='absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent'
                  aria-hidden='true'
                />
                <span className='relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-white'>
                  {s.icon}
                </span>{" "}
                <div className='z-10 flex flex-col items-center'>
                  <span
                    className={`whitespace-nowrap text-md font-medium duration-150 lg:text-xl text-zinc-200 group-hover:text-white font-display`}>
                    {s.handle}
                  </span>
                  <span className='mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200 capitalize'>
                    {s.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
