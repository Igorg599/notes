import React from 'react';
import { TextField } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {setNewNotes} from '../../redux/actions/action';

const EmptyModal = ({active, setActive}) => {
    const dispatch = useDispatch();
    const [newTitle, setNewTitle] = React.useState('');
    const [newDescr, setNewDescr] = React.useState('');

    const onValueTitleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const onValueDescrChange = (e) => {
        setNewDescr(e.target.value);
    }

    const onSaveUser = (e) => {
        e.preventDefault();
        const newobj = {
            id: Date.now(),
            title: newTitle,
            descr: newDescr,
        }
        dispatch(setNewNotes(newobj));
        setActive(false);
        document.body.style.overflow = 'visible';
        setNewTitle('');
        setNewDescr('');
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => {setActive(false); document.body.style.overflow = 'visible'}}>
            <div className="cl-btn-4" onClick={() => {setActive(false); document.body.style.overflow = 'visible'}}></div> 
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <form onSubmit={onSaveUser}>
                    <h3>Новая заметка</h3>
                    <p>Введите заголовок:</p>
                    <TextField type='text' onChange={onValueTitleChange} value={newTitle} label="заголовок" variant="outlined" size="small" required/>
                    <p>Введите текст:</p>
                    <TextField onChange={onValueDescrChange} value={newDescr} id="outlined-multiline-static" label="текст" multiline rows={13} fullWidth columns={11} variant="outlined"/>
                    <button type='submit' className='modal__content-button'>Добавить новую заметку</button>
                </form>
            </div>  
        </div>
    )
}

export default EmptyModal;