import { PortfolioCards, SectionTemplate } from "@/components";

export default function Portfolio() {
  return (
    <SectionTemplate
      bgText="Portfolio"
      headerTitle="Portfolio"
      headerSecondaryTitle="Cases"
      side="left"
    >
      <PortfolioCards />
    </SectionTemplate>
  );
}
