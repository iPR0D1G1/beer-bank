import { NEW_QUERRY, NEW_SEARCH_BEERS, REPLACE_ALL_SEARCHED_BEERS } from "../../constant/action-types"

const newQuery = query => {
    return {
        type: NEW_QUERRY,
        payload: query
    }
}

const newSearchBeers = beers => {
    return {
        type: NEW_SEARCH_BEERS,
        payload: beers
    }
}

const newQuerySearchBeers = beers => {
    return {
        type: REPLACE_ALL_SEARCHED_BEERS,
        payload: beers
    }
}

export {
    newQuery,
    newSearchBeers,
    newQuerySearchBeers
} 