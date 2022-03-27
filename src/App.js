import logo from './logo.svg';
import './App.scss';
import HelloWorld from './components/HelloWorld';
import Button from 'react-bootstrap/Button';
import HelloWorld1 from './components/HelloWorld1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button variant="primary">Primary</Button>
      <HelloWorld></HelloWorld>
      <HelloWorld1 />
    </div>
  );
}

export default App;
