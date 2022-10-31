import { Actions } from "../action/action"

const initialState = {
  images: {}
}
export default function getImages1(state = initialState, action){
   switch(action.type){
       case Actions.SET_IMAGES:
          return {...state, images:action.payload}
        default:  
    return state 
  }
}