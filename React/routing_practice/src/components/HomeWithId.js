import React from 'react'
import { useParams } from 'react-router-dom'

const HomeWithId = () => {
    const{id} = useParams()
  return (
    <div>
        <h1>The number is :  {id}</h1>
    </div>
  )
}

export default HomeWithId