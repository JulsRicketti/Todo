import { todoService } from '../app'

export default function fetchTodos () {
    return todoService.find()
        .then((page) => {
            const todos = 'total' in page
                ? page.data
                : page
            return todos
        })
    
}