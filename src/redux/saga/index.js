import {watchSaga} from "./saga";

export default function* rootSaga(){
    yield watchSaga();
}