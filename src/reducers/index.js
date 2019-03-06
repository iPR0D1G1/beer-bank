import { combineReducers } from "redux"
import BeerReducer from './beers/BeerReducer'
import SearchReducer from './search/SearchReducer'

export default combineReducers({
  beersState: BeerReducer,
  searchState: SearchReducer,
});