import React from 'react'
import Lottie from 'lottie-react';
import animationData from './Phone Animation.json';
const FirstAnimation = () => {
  return (
    <div style={{maxWidth:'500px'}}>
      <h3>Lovely animation with lottie</h3>
      <Lottie animationData={animationData} />
    </div>
  )
}

export default FirstAnimation


// ref - https://www.youtube.com/watch?v=Y8iTvfclmYM
