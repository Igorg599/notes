const initialState = {
    items: []
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTES':
            return {
                ...state,
                items: [...state.items],
            };


        default:
            return state;
    }
};

export default data;