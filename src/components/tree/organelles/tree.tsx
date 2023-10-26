import { RootState } from '@/stores/store';
import { rootsUpdate } from '@/stores/tree/actions';
import { SortableTree } from 'dnd-kit-sortable-tree';
import { TreeItem } from '../molecules/tree-item';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/tree.css';

export const Tree = () => {
  const dispatch = useDispatch();
  const treeState = useSelector((state: RootState) => state.treeState);
  const onItemsChanged = (items: any) => {
    dispatch(rootsUpdate({ roots: items }));
  };
  return (
    <div className="Tree">
      <SortableTree
        items={treeState.tree}
        onItemsChanged={onItemsChanged}
        TreeItemComponent={TreeItem}
      />
    </div>
  );
};
