import React from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import {Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Work from '../Work/Work'
import './App.scss';
const App = () => {
  return (
    <div className="app">
       <Router>
      <NavBar />
      <Container>
      <Switch>
  <Route path="/" component={About} exact/>
  <Route path="/work" component={Work} exact/>
  </Switch>
</Container>
      <Footer/>
      </Router>
    </div>
  )
}
export default App;