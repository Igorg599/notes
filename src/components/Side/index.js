import React from 'react';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import {TextField } from '@material-ui/core';
import SideItem from './SideItem';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import NoteModal from '../Note/NoteModal';
import {useDispatch} from 'react-redux';
import {removeNoteItem} from '../../redux/actions/action';

const Side = React.memo (
  function Side({activeNote, notes, searchUser, onClickNote}) {
    const dispatch = useDispatch();
    const [modalActive, setmodalActive] = React.useState(false);
  
    function onUpdateSearch(e) {
      searchUser(e.target.value);
    }
  
    const onRemoveItem = (id) => {
      dispatch(removeNoteItem(id));
    };
    
    return (
      <div className="side">
        <div className='side__ring side__ring-red'/>
        <div className='side__ring side__ring-orange'/>
        <div className='side__ring side__ring-green'/>
        <div className='side__iconplus'>
          <ControlPointIcon color="secondary" onClick={() => setmodalActive(true)}/>
        </div>
        <div className='side__icon'>
          <CloudQueueIcon/>
        </div>
        {notes.map(item => (
          <div 
          className={activeNote === item.id ? 'side__item active' : 'side__item'} 
          key={item.id}
          onClick={() => onClickNote(item.id)}>
            <SideItem 
            id = {item.id}
            title = {item.title}
            onRemove={onRemoveItem}/>
          </div>
        ))}
        <div className="side__input">
          <TextField 
          error
          id="outlined-error-helper-text"
          label="Поиск по заметкам" 
          variant="outlined" 
          onChange={onUpdateSearch}/>
        </div>
        <NoteModal active={modalActive} setActive={setmodalActive}/>
      </div>
    );
  }
);



export default Side;