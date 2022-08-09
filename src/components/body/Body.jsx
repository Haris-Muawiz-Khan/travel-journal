import React from 'react'
import './Body.css'
import data from '../../data'
import Articles from './articles'

const Body = () => {
  const articles = data.map (item => {
  
    return(
      <Articles key = {item.id}
      item = {item}/>
    )
  })
  return (
    <>
      <div className='container'>{articles}</div>
      
    </>
  )
}

export default Body