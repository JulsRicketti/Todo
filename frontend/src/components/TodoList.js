import React from 'react'
import { Icon } from 'semantic-ui-react'
import removeTodo from '../lib/removeTodo'
import fetchTodos from '../lib/fetchTodos'

export default class TodoList extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
          todos: []
        }
      }
    

    componentWillMount() {
        fetchTodos()
            .then ((todos) => this.setState({ todos }))
    }

    componentWillReceiveProps(){
        fetchTodos()
        .then ((todos) => this.setState({ todos }))
    }

    removeTodo(id) {
        return removeTodo(id)
            .then (() => {
                return fetchTodos()
                .then ((todos) => this.setState({ todos }))
            })
    }

    render () {
        const { todos } = this.state
        if (!todos) {
            return (<div>Loading...</div>)
        }
        if (todos.length === 0) {
            return (<div> No available todos</div>)
        }
        return (
            <div>
                {todos.map((todo, key) => {
                    return (
                        <div key={key}>
                            {todo.title} <Icon name='minus circle' color='red' onClick={()=>this.removeTodo(todo.id)} />
                        </div>
                    )
                })}
            </div>
        )
    }

}