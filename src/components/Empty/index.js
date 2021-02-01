import React from 'react';
import { Button } from '@material-ui/core';
import NoteModal from './EmptyModal';

function Empty() {
    const [modalActive, setmodalActive] = React.useState(false);

  return (
    <div className="empty">
        <Button variant="contained" color="secondary" onClick={() => setmodalActive(true)}>
            Создать новую заметку
        </Button>
        <NoteModal active={modalActive} setActive={setmodalActive}/>
    </div>
  );
}

export default Empty;