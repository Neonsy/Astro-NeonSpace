import type { IconType } from "react-icons";

type IconStyleProps = {
    icon: IconType;
};

export default function IconStyle({ icon: Icon }: IconStyleProps) {
    return <Icon className='rounded-full bg-body-gradient-3/75 text-logo-gradient-1 ~text-2xl/7xl ~p-1/5' />;
}
