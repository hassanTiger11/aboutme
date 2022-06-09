


import Terminal from './Terminal';
import { useEffect } from 'react';
import { useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Paper, Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';



function App() {
  const [currPage, setCurrPage] = useState("introduction")
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2d2e2e',
      },
      secondary: {
        main: '#edf2ff',
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
    <ThemeProvider theme={darkTheme} >
      
      
      <Stack spacing={10} >
        <ResponsiveAppBar setCurrPage={setCurrPage}/> 
        <Terminal/>
       
      </Stack>
      
    </ThemeProvider>
  );
}

export default App;

/***
 * <div className="App">
      <header className="App-header">
        {console.log("App:")}
        <TopBar setCurrPage={setCurrPage}/>
        <Terminal currPage={currPage}/>
      </header>
    </div>
 */