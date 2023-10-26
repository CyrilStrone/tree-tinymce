import * as types from "./types";
import { Root } from "./interfaces";

export interface IRootAdd {
  root: Root;
  parentId?: string;
}
export const rootAdd = (props: IRootAdd) => ({
  type: types.ROOT__ADD,
  payload: props,
});

export interface IRootUpdate {
  root: Root;
}
export const rootUpdate = (props: IRootUpdate) => ({
  type: types.ROOT__UPDATE,
  payload: props,
});

export interface IRootMove {
  oldId: string;
  newId: string;
  index: number;
}
export const rootMove = (props: IRootMove) => ({
  type: types.ROOT__MOVE,
  payload: props,
});

export interface IRootDelete {
  id: string;
}
export const rootDelete = (props: IRootDelete) => ({
  type: types.ROOT__DELETE,
  payload: props,
});

export interface IRootsUpdate {
  roots: Root[];
}
export const rootsUpdate = (props: IRootsUpdate) => ({
  type: types.ROOTS__UPDATE,
  payload: props,
});
