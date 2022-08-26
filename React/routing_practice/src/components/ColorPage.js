import React from 'react'
import { useParams } from 'react-router-dom'

const ColorPage = () => {
    const{cWord, wColor, bgColor} = useParams()
  return (
    <div>
         <h1 style = {{ color: wColor, backgroundColor: bgColor}}>The word is: {cWord}</h1>
    </div>
  )
}

export default ColorPage