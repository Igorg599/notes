const initialState = {
    items: []
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTES':
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case 'REMOVE_NOTE_ITEM':
            const newItemsRemove = state.items.filter((item) => item.id !== action.payload);
            return {
                ...state,
                items: newItemsRemove,
            };

        default:
            return state;
    }
};

export default data;