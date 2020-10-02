import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <section className='background' style={{
          background: "url('images/index.jpg')"
        }}>
          <div className="App">
            <Header />
            <Route
              exact
              path="/"
              component={Home} />
            <Route
              exact
              path="/about"
              component={About} />
            <Route
              exact
              path="/skills"
              component={Skills} />
            <Route
              exact
              path="/portfolio"
              component={Portfolio} />
            <Route
              exact
              path="/contact"
              component={Contact} />
            <Footer />
          </div>
        </section>
      </Router>
    );
  }
}
export default App;