import React from 'react'
import { useState } from 'react'

import Post from './Post'
import { Divider, Grid, List, ListItem } from '@mui/material'

import { Skeleton } from '@mui/material'
export default function Terminal({currPage, post_json = []}) {

  const [post_lst, set_post_lst] = useState((post_json === [])? "post_lst.json": post_json)

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
  const empty_list = ()=>{
    const lst = [1, 2, 3, 4, 5, 6, 7]
    return lst.map((key)=>{
      return <><ListItem><Skeleton animation="wave" variant="rectangular"  width="30vw" height="10vh" /></ListItem><Divider /></>
    })
      
    
  }
  return (
    <Grid container direction="column" alignItems="center" justify="center">
    <List justifyContent="center"
          alignItems="center" 
          sx={{border:"1px solid",  textAlign: 'center' , minWidth:"30vw", minHeight:"80vh"}}>
      
      {(post_lst.length===0) ? empty_list() : view_posts()}

      
      
    </List>
    </Grid>
    
    
  )
}
