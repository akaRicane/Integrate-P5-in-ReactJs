import './App.css';
import ScriptTag from 'react-script-tag';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Integrate p5 in react !
        </p>
      </header>
      <ScriptTag type="text/javascript" src='sketches/main.js' />
    </div>
  );
}

export default App;
