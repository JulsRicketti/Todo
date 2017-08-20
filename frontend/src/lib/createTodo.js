import { todoService } from '../app'

export default function createTodo (title, description) {
    return todoService.create({
        title, description
    })
    .then(()=> console.log('create successfully!'))
}