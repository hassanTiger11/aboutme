import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar';
import Terminal from './Terminal';
function App() {
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
