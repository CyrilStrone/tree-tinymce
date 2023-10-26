import moment from "moment";
import { TreeState } from "./interfaces";

export const defaultTree: TreeState = {
  tree: [
    {
      id: "1",
      parentId: undefined,
      content: undefined,
      title: "Главная",
      dateOfCreation: moment(new Date()),
      expirationDate: moment(new Date()),
      children: [
        {
          id: "2",
          parentId: "1",
          content: undefined,
          title: "Йоу",
          dateOfCreation: moment(new Date()),
          expirationDate: moment(new Date()),
          children: undefined,
        },
        {
          id: "3",
          parentId: "1",
          content: undefined,
          title: "Чоу",
          dateOfCreation: moment(new Date()),
          expirationDate: moment(new Date()),
          children: undefined,
        },
      ],
    },
  ],
};
