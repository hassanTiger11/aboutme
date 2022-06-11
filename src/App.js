


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



function App() {
  const [currPage, setCurrPage] = useState("Projects")
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
      
      {console.log(currPage)}
      <Stack spacing={10} sx={{ backgroundColor:"primary.light", height:"100%", width:"100%", 
      position: "fixed", left:0, top:0, bottom:0, right:0, left:0, margin:0, padding:0, overflowY:"auto"
      }}>
        <ResponsiveAppBar setCurrPage={setCurrPage}/> 

        <Grid container direction="column" alignItems="center" justify="center">
          <Grid sx={{maxWidth:"50vw", minWidth:"380px",  paddingBottom:"10px"}}>
          {(currPage==="Projects") ? <Terminal currPage={currPage} post_json={Projects}/>: <Contact/>}
          </Grid>
        </Grid>

       
      </Stack>
      
    </ThemeProvider>
  );
}

export default App;
