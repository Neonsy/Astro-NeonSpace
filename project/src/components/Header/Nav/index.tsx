import { NAV_ITEMS } from '@/lib/nav/items';

import DesktopNav from '@/components/Header/Nav/DesktopNav';
import MobileNav from '@/components/Header/Nav/MobileNav';

type Props = {
    currentPath: string;
};

export default function Nav({ currentPath }: Props) {
    return (
        <>
            <DesktopNav currentPath={currentPath} navItems={NAV_ITEMS} />
            <MobileNav currentPath={currentPath} navItems={NAV_ITEMS} />
        </>
    );
}
