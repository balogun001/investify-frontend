'use client';

import { Button } from '@ui/Button';
import { SideDrawer } from '@ui/SideDrawer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { InvestifyLogo } from 'src/assets/icons';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="w-full text-p1">
      <nav className="flex items-center justify-between text-white px-2 lg:px-8">
        <Link href="/">
          <InvestifyLogo className="text-9xl" />
        </Link>
        <div className="lg:flex space-x-6 max-lg:hidden">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className="transition-transform duration-300 ease-in-out mt-1 hover:-translate-y-1 hover:opacity-80 cursor-pointer">
                {link.name}
              </span>
            </Link>
          ))}
          {/* </Link> */}
          <span className="bg-white h-8 w-[1px]" />
          {/* <Link href={Pages.hostPeople}> */}
          <Button kinds="normal" size="md">
            Login
          </Button>
          {/* </Link> */}
        </div>
        <span className="lg:hidden" onClick={toggleSidebar}>
          <HiMenuAlt4 className="text-green-300 text-3xlz" />
        </span>

        <div className="lg:flex items-center text-p2 space-x-4 max-lg:hidden">
          {/* <Link href={Pages.onBoarding}> */}
          <Button size="md"> Sign Up</Button>
          {/* </Link> */}
        </div>

        <SideDrawer open={sidebarOpen} onClose={toggleSidebar} position="right">
          <div className="flex flex-col items-center justify-center gap-2 text-white text-p1 mx-2 mt-10">
            <div className="flex flex-col gap-4">
              {/* <Link href={Pages.onBoarding}> */}
              <Button size="lg"> Sign Up</Button>
              {/* </Link> */}
              {/* <Link href={Pages.signin}> */}
              <span className="transition-all duration-500 ease-in-out mt-1">
                Log in
              </span>
              {/* </Link> */}
              {/* <Link href={Pages.hostPeople}> */}
              <span className="transition-all duration-500 ease-in-out mt-1">
                Host people
              </span>
              {/* </Link> */}
              {/* {Links.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span className="transition-all duration-500 ease-in-out mt-1">
                    {link.name}
                  </span>
                </Link>
              ))} */}
            </div>
          </div>
        </SideDrawer>
      </nav>
    </header>
  );
}

export default Header;
