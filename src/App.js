import React from 'react';
import Side from './components/Side/index';
import Note from './components/Note/index';
import Empty from './components/Empty/index';
import {useSelector, useDispatch} from 'react-redux';
import {setNote} from './redux/actions/action';


function App() {
  const dispatch = useDispatch();
  const notes = useSelector(({data}) => data.items);
  const [inputVolume, setInputVolume] = React.useState('');
  const activeNote = useSelector(({data}) => data.activeNote);
  
  function searchUser(value) {
    setInputVolume(value);
  }

  let newNotes = [];

  const viewNote = notes.filter(obj => {
    return obj.id === activeNote;
  })

  if (notes.length !== 0) {
    newNotes = notes.filter((location) => {
      return location.title.indexOf(inputVolume) > -1
    });
  }

  
  const onSelectNote = React.useCallback((index) => {
    dispatch(setNote(index));
  }, [dispatch]);

  return (
    <>
      {notes.length !== 0 ? 
        <div className="mac">
          <Side notes={newNotes} onClickNote={onSelectNote} searchUser={searchUser} activeNote={activeNote}/>
          {viewNote.length > 0 ?
            <Note note={viewNote}/> :
            <div className="note"></div>
          }
        </div> :
        <Empty/>
      }
    </>
  );
}

export default App;
