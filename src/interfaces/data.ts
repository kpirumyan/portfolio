export interface LinkData {
  id: string;
  icon: React.FunctionComponent;
  url: string;
}

export type PhraseData = string[];

export interface ServiceData {
  title: string;
  description: string;
  icon: React.FunctionComponent;
}

export interface SkillData {
  name: string;
  value: number;
  text?: string;
}
