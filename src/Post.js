import React from 'react'
import { useState } from 'react'
import "./Post.css"
/**
 * States to be kept taken care of:
    * picture
    * description
    * date
    * link_to_service
 */
export default function Post({pic, desc, dt, link = ""}) {
    const [picture, setPicture] = useState(pic)
    const [description, setDescription] = useState(desc)
    const [date, setDate] = useState(dt)
    const [link_to_service, set_link_to_service] = useState(link)
    
   
    return (
        <div className='Post'>
            <img src={picture}/>
            <div className='Descrition'>{description}</div>
            <div>{date}</div>
            <a href={link_to_service}>go to service</a>
        </div>
        

    )
}
