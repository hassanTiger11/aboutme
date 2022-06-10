


import Terminal from './Terminal';
import { useEffect } from 'react';
import { useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Paper, Stack } from '@mui/material';
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
      <Stack spacing={10} sx={{ backgroundColor:"primary.light", height:"100%", width:"100%", position: "absolute", left:"0", top:0, bottom:0, right:0}}>
        <ResponsiveAppBar setCurrPage={setCurrPage}/> 
        {(currPage==="Projects") ? <Terminal currPage={currPage} post_json={Projects}/>: <Contact/>}

       
      </Stack>
      
    </ThemeProvider>
  );
}

export default App;
