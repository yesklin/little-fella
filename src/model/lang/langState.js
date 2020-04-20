import React, {useReducer} from 'react'
import LangReducer from './langReducer'
import LangContext from './langContext'
import languages from '../../components/Texts'
import{
  LANGUAGE,
  SET_LANGUAGE
} from '../types';


const LangState = props => {
  const initialState = {
    language: languages.english
  }

  
  const [state, dispatch] = useReducer(LangReducer, initialState);


  const setLanguage = (language) => dispatch({type: SET_LANGUAGE, payload: language})

  return <LangContext.Provider value={
    {
      language: state.language,
      setLanguage
    }
  }>
  {props.children}

  </LangContext.Provider>
}

export default LangState;