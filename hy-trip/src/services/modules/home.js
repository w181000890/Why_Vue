import hyRequest from '../request'

export function getHomeHostSuggests(){
  return hyRequest.get({
    url:"/home/hotSuggests"
  })
}