
//dev url
export const baseUrl = "https://api.punkapi.com/v2/"

// Production url
// export const baseUrl = "https://api.punkapi.com/v2/"

export const beers = {
  //without searching parameters
  GET_BEERS: pagingData => `${baseUrl}beers?page=${pagingData.page}&per_page=${pagingData.perPage}`,
  SEARCH_BEERS: searchData => `${baseUrl}beers?beer_name=${searchData.query}&page=${searchData.page}&per_page=${searchData.perPage}`,
  ADVANCED_SEARCH_BEERS: searchData => `${baseUrl}beers?page=${searchData.page}&per_page=${searchData.perPage}${searchData.searchQuery}`,

  GET_BEER: beerId => `${baseUrl}beers/${beerId}`,
  GET_RANDOM_BEER: `${baseUrl}beers/random`,

}
