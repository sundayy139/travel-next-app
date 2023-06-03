'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useState, useCallback, useRef } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import DarkModeButton from './DarkModeButton';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/hooks/useRentModal';
import { useRouter } from 'next/navigation';
import useClickOutside from '@/app/hooks/useClickOutside';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const menuRef = useRef(null);
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  useClickOutside(menuRef, setIsOpen);

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center justify-between gap-3">
        <div
          onClick={() => onRent()}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 dark:bg-dark-btn dark:hover:bg-hover-btn transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <DarkModeButton />
        <div
          onClick={toggleOpen}
          className="px-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition dark:border-none dark:bg-dark-btn dark:hover:bg-hover-btn"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white dark:bg-dark-btn overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => router.push('/trips')} label="My trips" />
                <MenuItem onClick={() => router.push('/favorites')} label="My favorites" />
                <MenuItem onClick={() => router.push('/reservations')} label="My reservations" />
                <MenuItem onClick={() => router.push('/properties')} label="My properties" />
                <MenuItem onClick={rentModal.onOpen} label="Airbnb my home" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Log out" />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    loginModal.onOpen();
                    setIsOpen(false);
                  }}
                  label="Login"
                />
                <MenuItem
                  onClick={() => {
                    registerModal.onOpen();
                    setIsOpen(false);
                  }}
                  label="Sign Up"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
