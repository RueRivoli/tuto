import React, { Component } from 'react';
import Header from './Components/header.jsx';
import TodoInput from './Components/todoInput.jsx';
import TodoItem from './Components/todoItem.jsx';
import './App.css';

class App extends Component {

   constructor(props){
       super(props);
       this.state = {
           todos:[
               {id: 0, text: "Trouver un stage"},
               {id: 1, text: "Faire un régime"},
               {id: 2, text: "Voir les copains"}
           ],
           nextId: 3
       };
       this.addTodo = this.addTodo.bind(this);
       this.removeTodo = this.removeTodo.bind(this);
   }

   addTodo(newText){
       let todos = this.state.todos.slice();
       todos.push({id: this.state.nextId, text: newText});
       this.setState({
            todos: todos,
            nextId: ++this.state.nextId
       });
   }

   removeTodo(id){
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        });
   }


  render() {
    return (
        <div className="App">
            <div className="box">
            <Header/>
            <TodoInput todoText="" addTodo={this.addTodo}/>
            <ul>
                {
                    this.state.todos.map((todo) => {
                        return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                    })
                }
            </ul>
            </div>
        </div>
  );
  }
}

export default App;