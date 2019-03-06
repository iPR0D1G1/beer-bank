import BaseService from './BaseService'
import { beers } from './urls'

class BeersService {
  static getBeers = pagingData => {
    return BaseService.getRequest(beers.GET_BEERS(pagingData), false)
  }

  static searchBeer = searchOptionPagingData => {
    return BaseService.getRequest(beers.SEARCH_BEERS(searchOptionPagingData), false)
  }

  static advancedSearchBeer = searchOptionPagingData => {
    return BaseService.getRequest(beers.ADVANCED_SEARCH_BEERS(searchOptionPagingData), false)
  }

  // static getCategories = () => {
  //   return BaseService.getRequest(beers.ALL_CATEGORIES, true)
  // }

}

BeersService.publicName = 'BeersService'
export default BeersService
