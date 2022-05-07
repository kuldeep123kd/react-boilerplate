import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HelloWorld from './components/HelloWorld';
import Button from 'react-bootstrap/Button';
import HelloWorld1 from './components/HelloWorld1';
import PropsExample from './components/PropsExample';

function App() {

  const [NewName, setNewName] = React.useState('React');
  const [NewNameObj, setNewNameObj] = React.useState({
    name: 'React',
    age: 20
  });
  const [NewNameArr, setNewNameArr] = React.useState([
    'Araay React',
    'Araay ReactJs',
  ]);
  const changeName = () => {
    setNewName('ReactJS');
  }
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <Button variant="primary">Primary</Button>
      <HelloWorld></HelloWorld>
      <HelloWorld1 /> */}

      <PropsExample title='KD' name={NewName} newNameObj={NewNameObj} newNameArr={NewNameArr} changeNameProp={changeName}  />
    </div>
  );
}

export default App;
