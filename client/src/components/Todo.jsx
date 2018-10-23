import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, ListGroupItemHeading, Row, Col, Input,
 Modal, ModalHeader, ModalBody} from 'reactstrap';

import axios from 'axios';

import AddItem from './AddItem';
import UpdateItem from './UpdateItem';

// unique ID generator
const uuidv4 = require('uuid/v4');

class Todo extends Component {
  constructor(props){
    super(props)

    const today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

    this.state = {
      'items': [],
      'date': date,
      'modal': false,
      'updatedItem': {}
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.updateModal = this.updateModal.bind(this);
    this.handleChild = this.handleChild.bind(this);
    this.updateChild = this.updateChild.bind(this);

  }

  componentWillMount() {
    axios.get('/todos/getItems/')
    .then(response => {
      console.log(response.data, typeof response.data)

      this.setState({
        items: response.data
      });
    })
    .catch(error => {
      console.log('error', error)
    })
  }

  toggleModal() {
    this.setState({
      'modal': !this.state.modal
    });
  }

  updateChild = (value) => {
    console.log('getUpdateChild', value)
  }

  handleChild = (value) => {
    const newItem = {
      'title': value.title,
      'text': value.text
    };
    console.log('new item: ', newItem);
    this.state.items.push(newItem);
    this.setState({
      modal: value.modalStatus
    });
  }

  delete = (item) => {
    console.log('this items: ', this.state.items);
    console.log('Item to be deleted', item);
    // to enable csrf tokens with axios
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios({
      method: 'post',
      url: `/todos/delete/${item.id}`,
      data: item.id,
    }).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error)
    });
    this.handleTodoDelete(item);
  }

  handleTodoDelete = (item) => {
    var todos = this.state.items;
    for(var i = 0; i < todos.length; i++) {
      if(todos[i].id == item.id) {
        todos.splice(i, 1);
      }
    }
    this.setState({
      todos: todos
    });
  }

  updateModal = (item) => {
    this.setState({
      update: !this.state.update,
      updatedItem: item
    });
  }

  render() {

    return(
      <div id="todo">
        <ListGroup>
          <ListGroupItem active>
            <ListGroupItemHeading>
              <span className="date">{this.state.date}</span>
              <Input type="select" name="select" id="select">
                  <option>Show All</option>
                  <option>Show Completed</option>
                  <option>Hide Completed</option>
              </Input>
            </ListGroupItemHeading>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col xs="3"><b>Completed</b></Col>
              <Col xs="3"><b>Title</b></Col>
              <Col><b>Description</b></Col>
            </Row>
          </ListGroupItem>
          {this.state.items.map((item, key) => {
                return <ListGroupItem key={key}>
                  <Row>
                    <Col xs="3"><Input type="checkbox" className="checkbox"/></Col>
                    <Col>{item.title}</Col>
                    <Col>{item.text}</Col>
                    <Col>
                      <Button color="warning" size="sm" onClick={() => this.updateModal(item)}>UPDATE</Button>{' '}
                      <Button color="danger" size="sm"  onClick={() => this.delete(item)}>DELETE</Button>{' '}
                    </Col>
                  </Row>
                </ListGroupItem>
                })
              }
          <ListGroupItem>
            <Button color="primary" size="sm" onClick={this.toggleModal}>ADD NEW +</Button>{' '}
          </ListGroupItem>
         </ListGroup>

         <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="addModal" backdrop='static' >
           <ModalHeader toggle={this.toggleModal}>Add a new todo</ModalHeader>
           <ModalBody>
             {/* add a new todo form */}
             <AddItem getChild={this.handleChild}/>
           </ModalBody>
         </Modal>


         <Modal isOpen={this.state.update} toggle={this.updateModal} className="addModal" backdrop='static' >
           <ModalHeader toggle={this.updateModal}>Update Item</ModalHeader>
           <ModalBody>
             {/* update a todo item form */}
             <UpdateItem getUpdateChild={this.updateChild} sendChild={this.state.updatedItem}/>
           </ModalBody>
         </Modal>

      </div>

    )
  }
}
export default Todo;
