import React from 'react';
import Side from './components/Side';
import Note from './components/Note';
import Empty from './components/Empty/Empty';
import {useSelector} from 'react-redux';


function App() {
  const notes = useSelector(({data}) => data.items);

  return (
    <div className="App">
      {notes ? 
        <>
          <Side/>
          <Note/>
        </> :
        <Empty/>
      }
    </div>
  );
}

export default App;
