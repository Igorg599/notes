export const setNewNotes = (obj) => ({
    type: 'SET_NOTES',
    payload: obj,
});

export const removeNoteItem = (id) => ({
    type: 'REMOVE_NOTE_ITEM',
    payload: id,
});

export const changeNote = (obj) => ({
    type: 'CHANGE_NOTE',
    payload: obj,
});

export const setNote = (index) => ({
    type: 'SET_NOTE',
    payload: index,
});