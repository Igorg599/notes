import React from 'react';
import Side from './components/Side/index';
import Note from './components/Note/index';
import Empty from './components/Empty/index';
import {useSelector} from 'react-redux';


function App() {
  const notes = useSelector(({data}) => data.items);
  const [inputVolume, setInputVolume] = React.useState('');
  
  function searchUser(value) {
    setInputVolume(value);
  }

  let newNotes = [];

  if (notes.length !== 0) {
    newNotes = notes.filter((location) => {
      return location.title.indexOf(inputVolume) > -1
    });
  } 

  return (
    <>
      {notes.length !== 0 ? 
        <div className="mac">
          <Side notes={newNotes} searchUser={searchUser}/>
          <Note/>
        </div> :
        <Empty/>
      }
    </>
  );
}

export default App;
