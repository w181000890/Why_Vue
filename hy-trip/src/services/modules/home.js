import hyRequest from '../request'

export function getHomeHostSuggests(){
  return hyRequest.get({
    url:"/home/hotSuggests"
  })
}

export function getHomeCategories(){
  return hyRequest.get({
    url:"/home/categories"
  })
}

export function getHomeHouselist(currentPage){
  return hyRequest.get({
    url:"/home/houselist",
    params:{
      page:currentPage
    }
  })
}