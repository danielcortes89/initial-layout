import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/LoginComponent'
import Register from './components/RegisterComponent'
import Home from './components/HomeComponent'
import About from './components/AboutComponent'

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      
      </header>
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Router>
    </div>
  );
}

export default App;
