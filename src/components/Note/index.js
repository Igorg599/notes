import React from 'react';
import {useDispatch} from 'react-redux';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SaveIcon from '@material-ui/icons/Save';
import { TextField } from '@material-ui/core';
import {changeNote} from '../../redux/actions/action';

function Note({notes}) {
  console.log(notes);
  const dispatch = useDispatch();
  const [dataInput, setDataInput] = React.useState(true);
  const [newTitle, setNewTitle] = React.useState(notes.title);
  const [newDescr, setNewDescr] = React.useState(notes.descr);

  const onValueTitleChange = (e) => {
    setNewTitle(e.target.value);
  }

  const onValueDescrChange = (e) => {
    setNewDescr(e.target.value);
  }

  const onSaveNote = (e) => {
    e.preventDefault();
    const newobj = {
        id: notes[0].id,
        title: newTitle,
        descr: newDescr,
    }
    dispatch(changeNote(newobj));
    setDataInput(!dataInput);
  }

  return (
    <form onSubmit={onSaveNote} className="note">
      {dataInput ?
        <>
          <h2>{notes[0].title}</h2>
          <p>{notes[0].descr}</p>
        </> :
        <>
          <div className='note__input'>
            <TextField type='text' value={newTitle} onChange={onValueTitleChange} label="заголовок" variant="outlined" size="small" required/>
          </div>
          <div className='note__input'>
            <TextField  value={newDescr} onChange={onValueDescrChange} id="outlined-multiline-static" label="текст" multiline rows={13} fullWidth columns={11} variant="outlined"/>
          </div>
        </>
      }
      {dataInput ?
        <div className='note__button' onClick={() => setDataInput(!dataInput)}>
            <BorderColorIcon color="primary"/>
        </div> :
        <button type='submit' className='note__button'>
            <SaveIcon color="primary"/>
        </button>
      }
    </form>
  );
}

export default Note;