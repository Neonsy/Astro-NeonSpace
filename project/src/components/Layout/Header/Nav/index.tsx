import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/astro/react';

import { NAV_ITEMS } from '@/lib/nav/items';

import DesktopNav from '@/components/Layout/Header/Nav/DesktopNav';
import MobileNav from '@/components/Layout/Header/Nav/MobileNav';

type Props = {
    currentPath: string;
};

export default function Nav({ currentPath }: Props) {
    return (
        <nav>
            <DesktopNav currentPath={currentPath} navItems={NAV_ITEMS} />
            <MobileNav currentPath={currentPath} navItems={NAV_ITEMS} />
        </nav>
    );
}

export function AuthButton() {
    return (
        <>
            {/* Auth Button */}
            <SignedOut>
                <SignInButton mode='modal'>
                    <button className='rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20'>Sign In</button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <SignOutButton>
                    <button className='rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20'>Sign Out</button>
                </SignOutButton>
            </SignedIn>
        </>
    );
}
