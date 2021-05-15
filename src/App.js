import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/LoginComponent'
import Register from './components/RegisterComponent'

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
        
      
      </header>
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="register" component={Register}/>
      </Router>
    </div>
  );
}

export default App;
