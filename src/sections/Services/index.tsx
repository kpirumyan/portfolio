import { SectionTemplate, ServiceCards } from "@/components";

export default function Services() {
  return (
    <SectionTemplate
      bgText="Services"
      headerTitle="What I do"
      headerSecondaryTitle="Services"
      side="right"
    >
      <ServiceCards />
    </SectionTemplate>
  );
}
