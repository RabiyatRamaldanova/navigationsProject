import {takeEvery, put, call} from 'redux-saga/effects';
import {GET_ARRAY} from '../actions/action1';
import {getMovieAfter} from '../actions/action1';


function fetchData(title) {
    console.log("titleObject",title)
  const url = `http://api.tvmaze.com/search/shows?q=${title.payload}`;
  console.log("url", url)
    return async() => {
        try{
            return fetch(url)
          .then(response => response.json())
        }
        catch(error) {
            console.log("getMovieAsync" , error)
        }
    }
}

export function* workerLoadData(title) {
  const data = yield call(fetchData(title));
  yield put(getMovieAfter(data))
}

export function* watcherLoadData() {
    yield takeEvery(GET_ARRAY, workerLoadData);
}