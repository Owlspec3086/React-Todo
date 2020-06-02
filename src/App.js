import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './components/Todo.css';

//Initinalizing toodoList Array

const todoList = [
  {
    task: '',
    id: 1528817077286,
    completed: false,
  },

  {
    task: '',
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Adding constructor with state
  constructor () {
    super();
    //initialize state object
    this.state = ({
      todoList,
      todoInput:'',
  
    })
  }

  //Updateing the state
  handleChanges = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  // New todo added
  addTodoTask = (todo) => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
    });
  };

  // Submit todo

  submitTodo = (evt) => {
    evt.preventDefault();
    this.addTodoTask(this.state.todoInput);
    this.setState({
      todoInput: '',
    });
  };

  // toggleItem

  toggleItem = (id) => {
    console.log(id);
    this.setState({
      todoList:this.state.todoList.map((item) => {
        if (item.id === id){
          return{
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  clearCompleted = () => {
    this.setState ({
      todoList: this.state.todoList.filter((item) => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          submitTodo={this.submitTodo}
          addTodoTask={this.addTodoTask}
          todoInput={this.state.todoInput}
          handleChanges={this.handleChanges}
        />
        <div>
          <TodoList
            todoList={this.state.todoList}
            toggleItem={this.toggleItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
