'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@primer/octicons-react";

const HomeNavigation = ({ customUsername }) => {
  const pathname = usePathname(); 
  
    const navigation = [
    { name: "•", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const TryYourself = ({ customUsername }) => {
    const href = customUsername ? "/" : "/search";
    return (
      <div className='absolute bottom-5 pb-5 '>
        <Link
          href={href}
          className='duration-500 text-gray-100 hover:text-gray-300 font-montreal-semibold text-sm tracking-widest'>
          {customUsername
            ? "Showing: " + customUsername + ", click to cancel ❌"
            : "Try this template"}
          <ArrowRightIcon className='w-4 h-4' />
        </Link>
      </div>
    );
  };

  return (
    <nav className='my-16 animate-fade-in'>
      <ul className='flex flex-col align-left justify-start gap-4'>
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={
              item.href +
              (customUsername ? `?customUsername=${customUsername}` : "")
            }
            className={`duration-500 text-gray-100 hover:text-gray-300 font-montreal text-sm tracking-widest ${pathname === item.href ? 'border-l border-gray-50 px-1.5' : ''}`}>
            {item.name}
          </Link>
        ))}
        <TryYourself customUsername={customUsername} />
      </ul>
    </nav>
  );
};
export default HomeNavigation;
