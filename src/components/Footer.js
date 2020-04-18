import React, { Fragment } from 'react'
import brazil from '../assets/br_flag.png'
import us from '../assets/us_flag.png'

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <img onClick={console.log('hello')} alt="loading" src={brazil} className="flag"></img>
        <img alt="loading" src={us} className="flag"></img>
      </footer>
    </Fragment>
  )
}

export default Footer
