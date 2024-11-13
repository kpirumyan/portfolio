import { SectionTemplate, Skills as SkillWrapper } from "@/components";

export default function Skills() {
  return (
    <SectionTemplate
      bgText="Skills"
      headerTitle="Professional Skills"
      headerSecondaryTitle="Talent"
      side="left"
    >
      <SkillWrapper />
    </SectionTemplate>
  );
}
