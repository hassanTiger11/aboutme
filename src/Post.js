import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider, Link, ListItem } from '@mui/material';

export default function Post({picture, title, description, date, link_to_service}) {
  return (
    <>
      
        <Card sx={{minHeight:"10vh" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={(picture !== "")?require(picture):require("./alt_github.jpg")}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button component={Link} href={link_to_service} size="small" color="primary">
              Go to Service
            </Button>
          </CardActions>
        </Card>
    </>
  );
}