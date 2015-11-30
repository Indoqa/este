import handleResponse from '../app/handleRestResponse';

const UPDATE_TIME = 'UPDATE_TIME';
export const UPDATE_TIME_ERROR = 'UPDATE_TIME_ERROR';
export const UPDATE_TIME_START = 'UPDATE_TIME_START';
export const UPDATE_TIME_SUCCESS = 'UPDATE_TIME_SUCCESS';

export function updateTime() {
  console.log('Called updateTime');
  return ({fetch})=>({
    type: UPDATE_TIME,
    payload: {
      promise: new Promise(function(resolve, reject){
        resolve({time: 'promise'})}).then((response) => response)
    }
  });
//  return (middleware)=>({
//    type: UPDATE_TIME,
//    payload: {
//      promise: middleware.fetch('/api/v1/home/time')
//      .then(handleResponse)
//    }
//  });
}
