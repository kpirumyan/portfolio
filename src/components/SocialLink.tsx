import { LinkData } from "@/interfaces";

export default async function SocialLinks({ data }: { data: LinkData }) {
  const Icon = data.icon;
  return (
    <a
      className="social-link mr-6 inline-block text-2xl text-black"
      href={data.url}
      rel="nofollow"
      target="_blank"
    >
      <Icon />
    </a>
  );
}
