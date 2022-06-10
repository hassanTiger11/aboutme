import React from 'react'
import { useState } from 'react'

import Post from './Post'
import { Divider, Grid, List, ListItem } from '@mui/material'

import { Skeleton } from '@mui/material'
export default function Terminal({currPage, post_json = []}) {

  const [post_lst, set_post_lst] = useState((post_json === [])? "post_lst.json": post_json)

  const view_posts= ()=>{
    
    console.log(post_json)
    return post_json.map((key)=>{
      
      return <ListItem key={key['title']}>
        <Post picture={key['picture']} title={key['title']} date={key['date']} description={key['description']}
        link_to_service = {key['link_to_service']}/> 
      </ListItem> 
      
      
    })
    
  }
  const empty_list = ()=>{
    const lst = [1, 2, 3, 4, 5, 6, 7]
    return lst.map((key)=>{
      return <><ListItem key={key}><Skeleton animation="wave" variant="rectangular"  width="30vw" height="10vh" /></ListItem><Divider /></>
    })
      
    
  }
  return (
    <Grid container direction="column" alignItems="center" justify="center">
    <List 
          sx={{ textAlign: 'center' , borderRadius:"10px", justifyContent:"center"}}>
      
      {(post_lst.length===0) ? empty_list() : view_posts()}

      
      
    </List>
    </Grid>
    
    
  )
}
