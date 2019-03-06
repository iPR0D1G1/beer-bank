import { NEW_QUERRY, NEW_SEARCH_BEERS, REPLACE_ALL_SEARCHED_BEERS, } from "../../constant/action-types"

const initialState = {
    beers: [],
    query: '',
};

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_QUERRY:
            return { ...state, query: action.payload }
        case NEW_SEARCH_BEERS:
            let beers = [...action.payload]
            if (state.beers) {
                beers = [...state.beers, ...action.payload]
            }
            return { ...state, beers }
        case REPLACE_ALL_SEARCHED_BEERS:
            return { ...state, beers: action.payload }
        default:
            return state
    }
}
export default SearchReducer;
