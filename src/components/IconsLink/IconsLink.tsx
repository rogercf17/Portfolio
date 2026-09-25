import type { ElementType } from "react";

type IconsLinkProps = {
    icon: ElementType;
    link: string;
};

export const IconsLink = ({ icon: Icon, link }: IconsLinkProps) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#7fc4ff]"
        >
            <Icon className="w-6 h-6" aria-hidden="true" />
        </a>
    );
};