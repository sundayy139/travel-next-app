'use client';

import { SafeUser } from '@/app/types';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white dark:bg-dark-nav z-10 shadow-md">
      <div className="py-4 border-b-[1px] dark:border-primary">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;