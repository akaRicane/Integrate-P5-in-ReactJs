import './App.css';
import ScriptTag from 'react-script-tag';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Hello world
        </p>
      </header> */}
      <ScriptTag type="text/javascript" src='sketches/p5soundinit.js' />
    </div>
  );
}

export default App;
