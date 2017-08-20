import assert from 'assert'
import fetchTodos from './fetchTodos'

describe('fetchTodos', function () {
    it('should return an array of objects', function (done) {
        fetchTodos()
            .then((todos)=>{
                assert.ok(Array.isArray(todos))
                if (todos.length > 0) {
                    todos.forEach(todo => {
                        assert.deepStrictEqual(typeof todo, 'object')
                    })
                }
            })
            .then(done, done)
        
    })
})