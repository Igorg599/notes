import React from 'react';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import {TextField } from '@material-ui/core';
import SideItem from './SideItem';

function Side({notes, searchUser}) {
  function onUpdateSearch(e) {
    searchUser(e.target.value);
  }
  
  return (
    <div className="side">
      <div className='side__ring side__ring-red'/>
      <div className='side__ring side__ring-orange'/>
      <div className='side__ring side__ring-green'/>
      <div className='side__icon'>
        <CloudQueueIcon/>
      </div>
      {notes.map(item => (
        <SideItem 
        key={item.id} 
        id = {item.id}
        title = {item.title}/>
      ))}
      <div className="side__input">
        <TextField 
        id="outlined-basic" 
        label="Поиск по заметкам" 
        variant="outlined" 
        onChange={onUpdateSearch}/>
      </div>
    </div>
  );
}

export default Side;