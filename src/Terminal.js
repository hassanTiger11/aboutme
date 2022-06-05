import React from 'react'
import { useState } from 'react'
import "./Terminal.css"
import Post from './Post'
export default function Terminal({currPage, post_json = ""}) {

  const [post_lst, set_post_lst] = useState((post_json == "")? "post_lst.json": post_json)

  const view_posts= ()=>{
    const jsonFile = {}
    try{
      const jsonFile = JSON.parse(post_lst)
    }catch(e){
      return <div>Err: Acheievments too big to be loaded</div>
    }
    
    return Object.keys(jsonFile).map((key)=>{
      <Post picture={jsonFile[key]['pic']} title={jsonFile[key]['title']} date={jsonFile[key]['dt']} description={jsonFile[key]['desc']}
      link_to_service = {jsonFile[key]['link']}/>
    })
    
  }
  return (
    <div className='Terminal'>
      <div>{currPage}</div>
      {view_posts()}
    </div>
    
  )
}
