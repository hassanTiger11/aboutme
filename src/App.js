import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar';
import Terminal from './Terminal';
import { useEffect } from 'react';
import { useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Card, Paper, Stack } from '@mui/material';
import { ThemeProvider } from 'styled-components';

import { createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';



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
      mode: 'dark',
    },
  });
  
  
  useEffect(() => {
    document.title = "Hassan Alnamer"
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack spacing={10} sx={{ color: 'primary' }}>
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