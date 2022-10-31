import {takeEvery, put, call} from 'redux-saga/effects';
 import {getImagesApi} from "../../api/getApi";
import { Actions } from '../action/action';

 export function* getImages(){
   const dataCall = yield call(getImagesApi)
   yield put({type: Actions.SET_IMAGES, payload:dataCall}) 
}

 export function* watchSaga(){
   yield takeEvery(Actions.GET_IMAGES_1, getImages)
 }