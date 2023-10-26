import treeReducer from './tree/reducer';
import { combineReducers, createStore } from 'redux';
import { TreeState } from './tree/interfaces';

const localStorageName = "projects";

export interface RootState {
  treeState: TreeState;
}

const rootReducer = combineReducers({
  treeState: treeReducer,
});

const store = createStore(rootReducer);

export { store, localStorageName };
