const initialState = {
    items: [],
    activeNote: null
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

        case 'CHANGE_NOTE':
            const newItems = [action.payload];
            const replacedItems = state.items.map(e => {
                if (newItems.some(({ id }) => id === e.id)) {
                    return newItems.find(({ id }) => id === e.id);
                }
                return e;
            });
            return {
                ...state,
                items: replacedItems,
            };
        
        case 'SET_NOTE':
            return {
                ...state,
                activeNote: action.payload,
            }    


        default:
            return state;
    }
};

export default data;