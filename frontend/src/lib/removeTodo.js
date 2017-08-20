import { todoService } from '../app'

export default function removeTodo (id) {
    return todoService.remove(id)
        .then((page) => {
            console.log('removed!', page)
        })
}