import React, {useState}from 'react'
import graviton from '../assets/graviton.png'
import regression from '../assets/regression.png'
import github from '../assets/github.png'
import arrow from '../assets/arrow.png'
import eye from '../assets/eye.png'
import english from '../components/Texts'
const Projects = () => {

    const projects = [
      {
        image: graviton,
        text: english.graviton_info,
        github: "https://github.com/yesklin/Gravitation",
        view: "https://yesklin.github.io/Gravitation/"
      },
      {
        image: regression,
        text: english.regression_info,
        github: 'https://github.com/yesklin/MyOwn-Network',
        view: 'https://yesklin.github.io/MyOwn-Network/index.html'
      }
    ]
    let index = 0;
    const [data, setData] = useState(projects[index]);

    
    const next = () =>{
      index++;
      console.log(index)      
      setData(projects[index])
    }
    const last = () =>{
      index--;
      if(index == -1)
        index = 0;
      console.log(index);
      setData(projects[index])
    }


    return (
    <div className="projects-container">
      <div className="img-container">
        <img className="project-print gray-scale show-image-animation" alt="loading" src={data.image}></img>
        
        <div className="grid-4 projects-button-container">
          <div style={{textAlign:'left'}}><img onClick={last} alt="loading" src={arrow} style={{transform: 'scaleX(-1)'}} className="show-image-animation gray-scale projects-button"></img></div>

          <div style={{textAlign:'center'}}><a href={data.github} target="_blank"><img alt="loading" src={github} className="show-image-animation gray-scale projects-button"></img></a></div>

          <div style={{textAlign:'center'}}><a href={data.view} target="_blank"><img alt="loading" src={eye} className="show-image-animation gray-scale projects-button"></img></a></div>
          
          <div style={{textAlign:'right'}}><img onClick={next} alt="loading" src={arrow} className="show-image-animation gray-scale projects-button"></img></div>
        </div>
      </div>

      <div className="projects-container-info show-image-animation">
      <p className="small bangers-family" style={{color: 'white'}}>{data.text}</p>
      </div>
    </div>
  )
}

export default Projects
