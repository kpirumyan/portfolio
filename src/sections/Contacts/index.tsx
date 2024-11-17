import { SectionTemplate, ContactsInfo, ContactsForm } from "@/components";
import Image from "next/image";
import decorImg1 from "@/images/pat-1.png";

export default function Contacts() {
  return (
    <SectionTemplate
      bgText="Contact Me"
      headerTitle="Contact Me"
      headerSecondaryTitle="Talk About Ideas"
      headerPrefix="Let's"
      side="left"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <ContactsInfo />
        </div>
        <div className="col-span-7 relative">
          <Image
            src={decorImg1}
            width={240}
            height={240}
            alt="Decoration image"
            className="absolute -left-[136px] -bottom-8"
          />
          <ContactsForm />
        </div>
      </div>
    </SectionTemplate>
  );
}
