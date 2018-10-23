import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class UpdateItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: ''
    }
    this.onChange = this.onChange.bind(this);
    this.clear = this.clear.bind(this);
    this.update = this.update.bind(this);

  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  clear() {
    this.setState({
      title: '',
      text: ''
    });
  }

  update() {
    const updateItem = {
      title: this.state.title,
      text: this.state.text
    }
    // pass data back to Todo Parent Component
    this.props.getUpdateChild(updateItem)
  }

  render() {
    return(
      <div className="updateItem">
        <Form className="updateForm">
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Update title" value={this.state.title} onChange={this.onChange} required/>
            </FormGroup>
            <FormGroup>
              <Label for="text">Description</Label>
            <Input type="text" name="text" id="text" placeholder="Update description" value={this.state.text} onChange={this.onChange} required/>
            </FormGroup>
            <Button color="info" onClick={this.update} >Update</Button>{' '}
            <Button color="danger" onClick={this.clear} id="clearBtn">CLEAR</Button>
        </Form>
      </div>
    )
  }
}
export default UpdateItem;
