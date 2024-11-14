import { SectionTemplate, More as MoreWrapper } from "@/components";

export default function More() {
  return (
    <SectionTemplate
      bgText="More"
      headerTitle="More"
      headerSecondaryTitle="Statistics"
      side="right"
    >
      <MoreWrapper />
    </SectionTemplate>
  );
}
