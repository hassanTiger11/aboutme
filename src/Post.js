import React from 'react'
import { useState } from 'react'
/**
 * States to be kept taken care of:
    * picture
    * description
    * date
    * link_to_service
 */
export default function Post({picture, description, date, link_to_service = ""}) {
    const [picture, setPicture] = useState(picture)
    const [description, setDescription] = useState(description)
    const [date, setDate] = useState(date)
    const [link_to_service, set_link_to_service] = useState(link_to_service)
    
   
    return (
        <div>
            <img src={picture}/>
            <div>{description}</div>
            <div>{date}</div>
            <a href={link_to_service}>go to service</a>
        </div>
        

    )
}
