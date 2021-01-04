export const initialState = {
    title: "rabbit", 
    arrayOfData: [],
};

function reducer1(state = initialState, action) {
    switch (action.type) {
        case 'SET_TITLE':
            return{
                title: action.payload
            };
        case 'GET_ARRAY':
            return{
                ...state,
                arrayOfData: action.payload
            }
        default:
        return state;
    }
}
export default reducer1;