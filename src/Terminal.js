import React from 'react'
import { useState } from 'react'
import "./Terminal.css"
import Post from './Post'
import { Divider, Grid, List } from '@mui/material'
import { Container } from '@mui/system'
import { Skeleton } from '@mui/material'
export default function Terminal({currPage, post_json = []}) {

  const [post_lst, set_post_lst] = useState((post_json == [])? "post_lst.json": post_json)

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
    <Grid container direction="column" alignItems="center" justify="center">
    <List justifyContent="center"
          alignItems="center" 
          sx={{border:"1px solid",  textAlign: 'center' , minWidth:"70vw"}}>
      <Grid item xs={3}>
        {(post_lst.length==0) ? (<Skeleton variant="rectangular" width={210} height={118} />) : view_posts()}

      </Grid>
      
    </List>
    </Grid>
    
    
  )
}
