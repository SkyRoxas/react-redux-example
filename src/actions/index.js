export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'

export const fetchPostRequest = (bool) => ({type: FETCH_POSTS_REQUEST, isRequest: bool})
export const fetchPostFailure = (bool) => ({type: FETCH_POSTS_FAILURE, isFailure: bool})
export const fetchPostSuccess = (items) => ({type: FETCH_POSTS_SUCCESS, items})

export const fetchPost = (url) => ((dispatch) => {
  dispatch(fetchPostRequest(true))
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(fetchPostRequest(false))
      return response
    })
    .then((response)=>response.json())
    .then((items)=> dispatch(fetchPostSuccess(items)))
    .catch(()=> dispatch(fetchPostFailure(true)))
})
