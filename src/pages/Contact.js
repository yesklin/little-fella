import React, {useContext} from 'react'
import LangContext from '../model/lang/langContext'


const Contact = () => {
  const langContext = useContext(LangContext);
  const {language} = langContext;
  return (
    <div style={{paddingTop:'5rem'}}>
      <div className="home-card">
      <h1 className="medium bangers-family white typewriter-text">{language.ears}</h1>
      <p className="medium bangers-family white typewriter-text">+55 (61) 99271-9513</p>
      <p className="medium bangers-family white typewriter-text">cd.santos.360@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact;