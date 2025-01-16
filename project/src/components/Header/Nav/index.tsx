import { NAV_ITEMS } from './navItems';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

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
