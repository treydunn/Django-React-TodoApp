import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from './components/Header';
import AddItem from './components/AddItem';
import Todo from './components/Todo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'data': ''
    }
  }

  componentWillMount() {
    axios.get('todos/current_datetime/')
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log('error', error)
    })
  }

  render() {
    return (
      <Router>
        <Container className="App">
          <Header/>
          <Route exact path="/" component={Todo}/>
        </Container>
      </Router>

    );
  }
}

export default App;
