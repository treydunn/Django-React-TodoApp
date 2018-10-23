import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
// unique ID generator
const uuidv4 = require('uuid/v4');

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
      modalStatus: null
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this);
    this.clear = this.clear.bind(this);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const uuid = uuidv4();
    const todoData = {
      id:  uuid,
      title: this.state.title,
      text: this.state.text
    };

    // to enable csrf tokens with axios
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';

    axios({
      method: 'post',
      url: '/todos/add/',
      data: todoData,
    }).then(function(response) {
      // if success, close modal
      console.log(response);
    }).catch(function(error) {
      console.log(error)
    });

    const childItem = {
      id: uuid,
      title: this.state.title,
      text: this.state.text,
      modalStatus: false
    }
    // pass data back to parent Todo component
    this.props.getChild(childItem)
  }


  clear() {
    this.setState({
      title: '',
      text: ''
    });
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <div className="addItem">
        <Form className="addForm" onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Enter title" value={this.state.title} onChange={this.onChange} required/>
            </FormGroup>
            <FormGroup>
              <Label for="text">Description</Label>
            <Input type="text" name="text" id="text" placeholder="Enter description" value={this.state.text} onChange={this.onChange} required/>
            </FormGroup>
            <Button color="info">ADD</Button>{' '}
            <Button color="danger" onClick={this.clear} id="clearBtn">CLEAR</Button>
        </Form>
      </div>

    )
  }
}
export default AddItem;
