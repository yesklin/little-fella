import {
  LANGUAGE,
  SET_LANGUAGE
} from '../types'


export default (state, action) => {
  switch(action.type){
    case SET_LANGUAGE:
      return{
        ...state,
        language: action.payload
      };
    
    default:
      return state;
  }
}