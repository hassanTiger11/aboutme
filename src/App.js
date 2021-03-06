


import Terminal from './Terminal';
import { useEffect } from 'react';
import { useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Grid, Paper, Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey, indigo, blueGrey, blue, red, cyan, lightBlue } from '@mui/material/colors';
import { light } from '@mui/material/styles/createPalette';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: lightBlue[500],

      },
      secondary: {
        main: grey[900],
      },
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  
  
  useEffect(() => {
    document.title = "Hassan Alnamer"
  }, []);
  return (
    
      <ThemeProvider theme={theme} >
        <BrowserRouter>
        
        
        
        <Stack spacing={10} sx={{ backgroundColor:"primary.light", height:"100%", width:"100%", 
        position: "fixed", left:0, top:0, bottom:0, right:0, left:0, margin:0, padding:0, overflowY:"auto"
        }}>
          <ResponsiveAppBar /> 

          <Grid container direction="column" alignItems="center" justify="center">
            <Grid sx={{maxWidth:"50vw", minWidth:"380px",  paddingBottom:"10px"}}>
            <Routes>
            <Route exact path="/aboutme" element={<Terminal post_json={Projects}/>}/>
            <Route exact path="/aboutme/projects" element={<Terminal post_json={Projects}/>}/>
            <Route exact path="/aboutme/contact" element={<Contact/>}/>
            
            </Routes>
            </Grid>
          </Grid>

        
        </Stack>
        
        </BrowserRouter>
      </ThemeProvider>
      
  );
}

export default App;
