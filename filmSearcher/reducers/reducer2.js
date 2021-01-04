export const initialState = {
    arrayOfFavorite: [],
};

function reducer2(state = initialState, action) {
    switch (action.type) {
        case 'SET_FAVORITE_ARRAY':
            return {
                //...state,
                arrayOfFavorite: [...state.arrayOfFavorite, action.payload]
            }

            case 'REMOVE':
                return {
                    arrayOfFavorite: action.payload
                }
        default:
        return state;
    }
}
export default reducer2;