import type {ReactElement} from "react";

interface FooterSocialIconProps {
  name: string;
  title: string;
  url: string;
  icon: ReactElement;
}

export default function FooterSocialIcon({name, title, url, icon}: FooterSocialIconProps) {
  return (
    <a className="mx-2 inline-flex items-center text-light contact-link" title={title} href={url}>
      {icon}
      <span className="sr-only">{name}</span>
    </a>
  )
}
