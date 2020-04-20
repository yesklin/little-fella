import React, { Fragment, useContext } from 'react'
import brazil from '../assets/br_flag.png'
import us from '../assets/us_flag.png'
import languages from './Texts'
import LangContext from '../model/lang/langContext'

const Footer = () => {

  const langContext = useContext(LangContext);
  const {setLanguage,  language} = langContext;

  const setPT = () => {
    setLanguage(languages.portuguese);
    console.log(language);

  }
  const setEN = () => {
    setLanguage(languages.english);
    console.log(language);
  }

  return (
    <Fragment>
      <footer>
        <img onClick={setPT} alt="loading" src={brazil} className="flag"></img>
        <img onClick={setEN} alt="loading" src={us} className="flag"></img>
      </footer>
    </Fragment>
  )
}

export default Footer
