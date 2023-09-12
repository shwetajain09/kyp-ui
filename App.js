import logo from './logo.svg';
import './App.css';
import {Card, CardTitle, CardBody, CardFooter} from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card ouiaId="BasicCard">
          <CardTitle>Title</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
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
    </div>
  );
}

export default App;
