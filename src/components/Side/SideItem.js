import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function SideItem({id, title, onRemove}) {

  const onDeleteNote = () => {
    onRemove(id);
}
  
  return (
    <div className="side__item">
      {title}
      <div className='side__item-delete'>
        <DeleteForeverIcon color="primary" onClick={onDeleteNote}/>
      </div>
    </div>
  );
}

export default SideItem;