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

export interface HistoryItemData {
  title: string;
  subtitle: string;
  text: string;
  date: {
    from: string;
    to?: string;
  };
}

export interface HistoryData {
  education: HistoryItemData[];
  experience: HistoryItemData[];
}

export interface MoreData {
  clients: number;
  projects: number;
  experience: number;
  lineOfCode: number;
}

export interface MoreItemData {
  title: string;
  value: number;
  icon: React.FunctionComponent;
}
