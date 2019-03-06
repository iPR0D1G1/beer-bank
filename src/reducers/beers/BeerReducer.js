import { NEW_BEER, NEW_BEERS, REPLACE_ALL_BEERS, NEW_FAVE, NEW_UN_FAVE, NEW_SEARCH_FAVE } from "../../constant/action-types"

const initialState = {
    beers: null,
};

const BeerReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_BEER:
            return { ...state, beers: [...state.beers, action.payload] }
        case NEW_BEERS:
            let beers = [...action.payload]
            if (state.beers) {
                beers = [...state.beers, ...action.payload]
            }
            return { ...state, beers }
        case REPLACE_ALL_BEERS:
            return { ...state, beers: action.payload }
        case NEW_FAVE:
            const selectedIndex = state.beers.findIndex(beer => beer.id === action.payload)
            const { beers: storeBeers } = state
            const selectedBeer = storeBeers[selectedIndex]
            selectedBeer.isFave = true
            return { ...state, beers: storeBeers }
        case NEW_SEARCH_FAVE:
            const newBeer = action.payload
            newBeer.isFave = true
            let beers1 = [newBeer]
            if (state.beers) {
                beers1 = [...state.beers, selectedBeer]
            }
            return { ...state, beers: beers1 }
        case NEW_UN_FAVE:
            const selectedFavouriteIndex = state.beers.findIndex(beer => beer.id === action.payload)
            const { beers: storeBeers1 } = state
            const selectedBeer1 = storeBeers1[selectedFavouriteIndex]
            selectedBeer1.isFave = false
            return { ...state, beers: storeBeers1 }
        default:
            return state
    }
}
export default BeerReducer;