import { defaultTree } from '@/stores/tree/default';
import { rootsUpdate } from '@/stores/tree/actions';
import { Tinymce } from '@/components/tinymce/organelles/tinymce';
import { Tree } from '@/components/tree/organelles/tree';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './app.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rootsUpdate({ roots: defaultTree.tree }));
  }, []);
  return (
    <div className='App'>
      <Tree />
      <Tinymce />
    </div>
  );
}

export default App;
