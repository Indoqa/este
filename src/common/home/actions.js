import handleResponse from '../lib/handleRestResponse'

const UPDATE_TIME = 'UPDATE_TIME'
export const UPDATE_TIME_ERROR = 'UPDATE_TIME_ERROR'
export const UPDATE_TIME_START = 'UPDATE_TIME_START'
export const UPDATE_TIME_SUCCESS = 'UPDATE_TIME_SUCCESS'

export function updateTime() {
  return ({fetch})=>({
    type: UPDATE_TIME,
    payload: {
      promise: fetch('/api/v1/home/time')
        .then(handleResponse)
    }
  })
}
