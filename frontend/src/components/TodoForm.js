import React from 'react'
import TodoList from './TodoList'
import { Form, Button, Input, TextArea } from 'semantic-ui-react'
import createTodo from '../lib/createTodo'

export default class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            todos: [],
            form:{
                title: '',
                description: ''
            }
        }
    }
    createTodo() {
        const { title, description } = this.state.form
        this.setState({
            form: {
                title: '',
                description: ''
            }
        })
        createTodo(title, description)
            .then((todos)=> this.setState({todos}))
    }

    onChange(evt){
        const form = Object.assign({}, this.state.form);
        form[evt.target.name] = evt.target.value
        this.setState({ form })
    }

    render () {
        const { form, todos } = this.state
        return (
            <div>
                <Form>
                    <Form.Field>
                        <label>Title</label>
                        <Input type='title' name='title' value={form.title} onChange={(evt)=>this.onChange(evt)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description: </label>
                        <TextArea type='description' name='description' value={form.description} onChange={(evt)=>this.onChange(evt)}/>
                    </Form.Field>
                    <Button type='submit' onClick={()=>this.createTodo()}>Create</Button>
                </Form>
                <TodoList todos={todos}/>
            </div>
        )
    }
}