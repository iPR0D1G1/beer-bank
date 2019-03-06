import { NEW_BEER, NEW_BEERS, REPLACE_ALL_BEERS, NEW_FAVE, NEW_UN_FAVE, NEW_SEARCH_FAVE } from "../../constant/action-types"

const newBeer = beer => {
    return {
        type: NEW_BEER,
        payload: beer
    }
}

const newBeers = beers => {
    return {
        type: NEW_BEERS,
        payload: beers
    }
}

const newFave = beerId => {
    return {
        type: NEW_FAVE,
        payload: beerId
    }
}

const newSearchFave = beer => {
    return {
        type: NEW_SEARCH_FAVE,
        payload: beer
    }
}

const newUnFave = beerId => {
    return {
        type: NEW_UN_FAVE,
        payload: beerId
    }
}

const replaceAllBeers = beers => {
    return {
        type: REPLACE_ALL_BEERS,
        payload: beers
    }
}

export {
    newBeer,
    newBeers,
    replaceAllBeers,
    newFave,
    newUnFave,
    newSearchFave,
} 