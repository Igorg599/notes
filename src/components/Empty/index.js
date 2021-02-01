import React from 'react';
import { Button } from '@material-ui/core';
import NoteModal from '../Note/NoteModal';

function Empty() {
    const [modalActive, setmodalActive] = React.useState(false);

  return (
    <div className="empty">
        <Button variant="contained" color="secondary" onClick={() => setmodalActive(true)}>
            Создать первую заметку
        </Button>
        <NoteModal active={modalActive} setActive={setmodalActive}/>
    </div>
  );
}

export default Empty;