import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar';
import Terminal from './Terminal';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.title = "Hassan Alnamer"
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
        <Terminal/>
      </header>
    </div>
  );
}

export default App;
