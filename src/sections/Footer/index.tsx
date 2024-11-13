import { SocialLinks } from "@/components";

export default function Index() {
  return (
    <div className="container grid grid-cols-3 py-16 text-sm font-bold uppercase tracking-wider">
      <div className="">
        <SocialLinks />
      </div>
      <div className="col-start-2 justify-self-center">
        © <span className="text-primary">2024</span>. All rights reserved
      </div>
      <div className="col-start-3 justify-self-end">
        Developed by <span className="text-primary">Karen Pirumyan</span>
      </div>
    </div>
  );
}
