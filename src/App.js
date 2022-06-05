import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar';
import Terminal from './Terminal';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [currPage, setCurrPage] = useState("introduction")
  useEffect(() => {
    document.title = "Hassan Alnamer"
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {console.log("App:")}
        <TopBar setCurrPage={setCurrPage}/>
        <Terminal currPage={currPage}/>
      </header>
    </div>
  );
}

export default App;
