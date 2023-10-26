import { Moment } from "moment";

interface Root {
  id: string;
  parentId: string | undefined;
  title: string;
  dateOfCreation: Moment;
  expirationDate: Moment;
  content: any | undefined;
  children: Root[] | undefined;
}

export interface TreeState {
  tree: Root[];
}

export type { Root };
