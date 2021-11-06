import React from 'react';
import { Button } from 'components';
import { formatters } from 'utils';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button label="This is component from a shared library" />
        <p>{formatters.toSentenceCase('this is text formatted with a shared formatter')}</p>
      </header>
    </div>
  );
}

export default App;
