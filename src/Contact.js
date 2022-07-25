import { LinkedIn } from '@mui/icons-material'
import { Avatar, BottomNavigation, BottomNavigationAction, Button, Card, CardMedia, Divider, Grid, Link, Typography } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
    <Card sx={{ textAlign:"center", justifyContent:"center", paddingBottom:10}}>
        
        <CardMedia
              component="img"
              height="140"
              image={require("./alt_github.jpg")}
              
        />

        <Grid container direction="column" alignItems="center" justify="center">
            <Avatar src={require("./HassanAlnamer.jpeg")}sx={{ width: 56, height: 56}}/>
        </Grid>
        <Typography gutterBottom variant="h5" component="div">
            Hassan Alnamer
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
            Software Developer
        </Typography>
        
        <BottomNavigation >

            <Button component={Link} href='https://www.linkedin.com/in/hassan-alnamer'>
            <BottomNavigationAction
                icon={<Avatar src={require("./linkedin.gif")} sx={{ width: 48, height: 48}}/>}
            />
            </Button>
            
            <Divider orientation="vertical"/>
            <Button component={Link} href='https://github.com/hassanTiger11'>
            <BottomNavigationAction
                icon={<Avatar src={require("./github.gif")} sx={{ width: 48, height: 48}}/>}
            />
            </Button>
            
           
        </BottomNavigation>
            
        
    </Card>
    </Grid>
    
  )
}
