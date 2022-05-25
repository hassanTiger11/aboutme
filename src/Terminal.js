import React from 'react'
import { useState } from 'react'
import "./Terminal.css"
import Post from './Post'
export default function Terminal({post_json = ""}) {

  const [post_lst, set_post_lst] = useState((post_json == "")? "post_lst.json": post_json)

  const view_posts= ()=>{
    const jsonFile = JSON.parse(post_lst)
    return Object.keys(jsonFile).map((key)=>{
      <Post picture={jsonFile[key]['picture']} date={jsonFile[key]['date']} description={jsonFile[key]['description']}
      link_to_service = {jsonFile[key]['link_to_service']}/>
    })
    
  }
  return (
    <div className='Terminal'>Terminal</div>
    {view_posts()}
  )
}
