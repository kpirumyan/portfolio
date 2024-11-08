import { SocialLink } from "@/components";
import { LinkData } from "@/interfaces";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

const links: LinkData[] = [
  {
    id: "linkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/karen-pirumyan-613628146/",
  },
  {
    id: "facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/karen.pirumyan81",
  },
  {
    id: "github",
    icon: FaGithub,
    url: "https://github.com/kpirumyan",
  },
];

export default function SocialLinks() {
  return (
    <div className="social-links mt-8">
      {links.map((link) => (
        <SocialLink data={link} key={link.id} />
      ))}
    </div>
  );
}
