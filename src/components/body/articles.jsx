import React from 'react'
import './articles.css'
import { MdLocationPin } from 'react-icons/md'

const articles = (props) => {
  return (
    <>
        <article>
            <div className="img">
                <img className='image' src={props.item.imageUrl} alt="" />
            </div>
            <div className="detail">
                <div className="loc">
                    <MdLocationPin className='loc-icon'/>
                    <span className='location'>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} target='_blank'>View on Google Maps</a>
                </div>
                <p className='title'>{props.item.title}</p>
                <span className='date'>{props.item.startDate} - {props.item.endDate}</span>
                <p className='description'>{props.item.description}</p>
            </div>
        </article>
        <hr />
    </>
  )
}

export default articles