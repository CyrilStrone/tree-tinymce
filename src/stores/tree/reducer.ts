import * as types from "./types";
import { TreeState, Root } from "./interfaces";
import { IRootMove } from "./actions";

const initialState: TreeState = {
  tree: [],
};

const updateNode = (
  nodes: Root[],
  id: string,
  update: Partial<Root>
): Root[] => {
  return nodes.map((node) => {
    if (node.id === id) {
      return {
        ...node,
        ...update,
      };
    } else if (node.children) {
      return {
        ...node,
        children: updateNode(node.children, id, update),
      };
    }
    return node;
  });
};

const deleteNode = (nodes: Root[], id: string): Root[] => {
  return nodes.reduce((acc, node) => {
    if (node.id === id) {
      return acc;
    } else if (node.children) {
      return [...acc, { ...node, children: deleteNode(node.children, id) }];
    }
    return [...acc, node];
  }, [] as Root[]);
};

const addNodeToTree = (
  nodes: Root[],
  parentId: string | undefined, // parentId может быть undefined
  newNode: Root
): Root[] => {
  if (parentId === undefined) {
    // Если parentId не указан, добавляем новый узел в самый верхний уровень дерева
    return [...nodes, newNode];
  }

  return nodes.map((node) => {
    if (node.id === parentId) {
      return {
        ...node,
        children: node.children ? [...node.children, newNode] : [newNode],
      };
    } else if (node.children) {
      return {
        ...node,
        children: addNodeToTree(node.children, parentId, newNode),
      };
    }
    return node;
  });
};

const findNodeById = (nodes: Root[], targetId: string): Root | undefined => {
  for (const node of nodes) {
    if (node.id === targetId) {
      return node;
    }
    if (node.children) {
      const foundNode = findNodeById(node.children, targetId);
      if (foundNode) {
        return foundNode;
      }
    }
  }
  return undefined;
};
const treeReducer = (state = initialState, action: any): TreeState => {
  switch (action.type) {
    case types.ROOTS__UPDATE: {
      // Обновление корней в дереве
      return {
        ...state,
        tree: action.payload.roots,
      };
    }

    case types.ROOT__ADD: {
      // Добавление нового корня или узла в дерево
      const newNode = {
        ...action.payload.root,
        parentId: action.payload.parentId || "",
        children: [],
      };
      return {
        ...state,
        tree: addNodeToTree(state.tree, action.payload.parentId || "", newNode),
      };
    }

    case types.ROOT__UPDATE: {
      // Обновление корня в дереве
      return {
        ...state,
        tree: updateNode(
          state.tree,
          action.payload.root.id,
          action.payload.root
        ),
      };
    }

    case types.ROOT__MOVE: {
      const { oldId, newId, index } = action.payload as IRootMove;
      const updatedTree = [...state.tree];

      const oldNode = findNodeById(updatedTree, oldId);
      const newNode = findNodeById(updatedTree, newId);

      if (oldNode && newNode) {
        // Найдены старый и новый узлы в дереве
        const movedNodeIndex = oldNode.children!.findIndex(
          (node) => node.id === oldId
        );
        const movedNode = oldNode.children!.splice(movedNodeIndex, 1)[0];
        newNode.children!.splice(index, 0, movedNode);

        return {
          ...state,
          tree: updatedTree,
        };
      }

      // Если oldId или newId не найдены, вернуть состояние без изменений
      return state;
    }

    case types.ROOT__DELETE: {
      // Удаление корня из дерева
      return {
        ...state,
        tree: deleteNode(state.tree, action.payload.id),
      };
    }

    default:
      return state;
  }
};

export default treeReducer;
