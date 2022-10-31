import { Actions } from "./action";

export function setImages(payload){
    return {type: Actions.SET_IMAGES, payload:payload}
}