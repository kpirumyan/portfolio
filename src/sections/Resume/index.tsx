import { Histories, SectionTemplate } from "@/components";

export default function Resume() {
  return (
    <SectionTemplate
      bgText="History"
      headerTitle="Resume"
      headerSecondaryTitle="Story"
      side="right"
    >
      <Histories />
    </SectionTemplate>
  );
}
