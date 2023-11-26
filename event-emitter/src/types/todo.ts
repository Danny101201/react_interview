
import { BaseEvent } from '../EventEmitter'
import { TodoEntity } from './TodoEntity'

export interface TodoEvents extends BaseEvent {
  addTodo: [TodoEntity]
}
