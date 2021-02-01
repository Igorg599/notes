export const setNewNotes = (obj) => ({
    type: 'SET_NOTES',
    payload: obj,
});

export const removeNoteItem = (id) => ({
    type: 'REMOVE_NOTE_ITEM',
    payload: id,
});