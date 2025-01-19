import { fadeInThenBounceConfig } from '@/lib/animations/simple';

import { FaAngleDoubleDown } from 'react-icons/fa';

import Link from '@/components/Common/Link';

type ExploreButtonProps = {
    href: string;
};

export default function ExploreButton({ href }: ExploreButtonProps) {
    return (
        <Link
            href={href}
            aria-label='Scroll down to explore'
            title='Scroll down to explore'
            hasMotion
            motionProps={{
                ...fadeInThenBounceConfig,
                transition: { ...fadeInThenBounceConfig.transition, y: { ...fadeInThenBounceConfig.transition.y, duration: 3 } },
            }}>
            <FaAngleDoubleDown className='rounded-full border border-white/15 text-white ~text-5xl/9xl ~p-1/3 lg:backdrop-blur-sm' />
        </Link>
    );
}
