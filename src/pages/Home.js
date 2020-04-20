import React, {useContext} from 'react'
import LangContext from '../model/lang/langContext'

const Home = () => {
  const langContext = useContext(LangContext);
  
  const {language} = langContext;


  return (
    <div style={{paddingTop:'5rem'}}>
      <div className="home-card">
      <h1 className="large bangers-family white typewriter-text">Carlos Santos</h1>
      <p className="medium bangers-family white typewriter-text">{language.profession}</p>
      <p className="small bangers-family white typewriter-text">{language.fields}</p>
      </div>
    </div>
  )
}

export default Home; 