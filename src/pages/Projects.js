import React, {useContext}from 'react'
import graviton from '../assets/graviton.png'
import regression from '../assets/regression.png'
import github from '../assets/github.png'
import arrow from '../assets/arrow.png'
import eye from '../assets/eye.png'

import LangContext from '../model/lang/langContext'
import languages from '../components/Texts'

const Projects = () => {

    const langContext = useContext(LangContext);
    const {language} = langContext;



    const projects = [
      {
        image: graviton,
        github: "https://github.com/yesklin/Gravitation",
        view: "https://yesklin.github.io/Gravitation/",

      },
      {
        image: regression,
        github: "https://github.com/yesklin/MyOwn-Network",
        view: "https://yesklin.github.io/MyOwn-Network/",
      }
    ]

  
    

    return (
    <div>
      <h1 className="large bangers-family white typewriter-text">{language.projects}</h1>
      <div className='all-projects'>
      <div className="project-container">
        <div className="img-container">
          <img className="project-print gray-scale show-image-animation" alt="loading" src={projects[0].image}></img>
          
          <div className="grid-2 projects-button-container">

            <div style={{textAlign:'left'}}><a href={projects[0].github} target="_blank"><img alt="loading" src={github} className="show-image-animation gray-scale projects-button"></img></a></div>

            <div style={{textAlign:'right'}}><a href={projects[0].view} target="_blank"><img alt="loading" src={eye} className="show-image-animation gray-scale projects-button"></img></a></div>
            
          </div>
        </div>

        <div className="projects-container-info show-image-animation">
        <p className="small bangers-family" style={{color: 'white'}}>{language.graviton_info}</p>
        </div>
        <vr/>
      </div>

      
      <div className="project-container">
        <div className="img-container">
          <img className="project-print gray-scale show-image-animation" alt="loading" src={projects[1].image}></img>
          
          <div className="grid-2 projects-button-container">

            <div style={{textAlign:'left'}}><a href={projects[1].github} target="_blank"><img alt="loading" src={github} className="show-image-animation gray-scale projects-button"></img></a></div>

            <div style={{textAlign:'right'}}><a href={projects[1].view} target="_blank"><img alt="loading" src={eye} className="show-image-animation gray-scale projects-button"></img></a></div>
            
          </div>
        </div>

        <div className="projects-container-info show-image-animation">
        <p className="small bangers-family" style={{color: 'white'}}>{language.graviton_info}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
