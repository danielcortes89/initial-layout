import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/LoginComponent'
import Register from './components/RegisterComponent'
import Home from './components/HomeComponent'
import About from './components/AboutComponent'
import Resources from './components/AdditionalResourceComponent'

import Navbar from './components/utilities/Navbar'
import Footer from './components/utilities/Footer'

import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="resources"/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
