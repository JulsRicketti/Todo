import React from 'react';
import TodoForm from './TodoForm'
import fetchTodos from '../lib/fetchTodos'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
