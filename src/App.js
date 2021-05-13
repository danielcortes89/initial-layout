import logo from './logo.svg';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

const Home = () => {
  return (
    <div>
      <h2>This is the Homepage</h2>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h3>This is the about Page</h3>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        
      </header>
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
      </Router>
    </div>
  );
}

export default App;
