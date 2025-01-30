import { SOCIAL_NAV } from '@/lib/nav/items';
import Link from '@/components/Common/Link';

type SocialNavProps = {
    containerClassName?: string;
    linkClassName?: string;
};

export default function SocialNav({ containerClassName, linkClassName }: SocialNavProps) {
    return (
        <div className={containerClassName}>
            {SOCIAL_NAV.map((item) => (
                <Link
                    key={item.href}
                    iconOnly
                    icon={item.icon}
                    href={item.href}
                    className={linkClassName}
                    external
                    aria-label={item.label}
                    title={item.label}
                />
            ))}
        </div>
    );
}
