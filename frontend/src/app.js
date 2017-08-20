import feathers from 'feathers-client'
import rest from 'feathers-rest/client'
import socketio from 'feathers-socketio/client'
import io from 'socket.io-client'

const host = 'http://localhost:3030';
export const app = feathers()
  .configure(socketio(io(host)))
  .configure(feathers.hooks())

export const todoService = app.service('todo')  