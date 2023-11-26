export type BaseEvent = Record<string, any[]>

export class EventEmitter<Event extends BaseEvent> {
  private readonly events = new Map<keyof Event, Function[]>()

  addEvent<K extends keyof Event>(type: K, callback: (...arg: Event[K]) => void) {
    const callBacks = this.events.get(type) || []
    callBacks?.push(callback)
    this.events.set(
      type,
      callBacks
    )
    return this
  }
  // type Event = {
  // aaa: [{ name: string }, {age:number}]
  // }
  // em.emit('aa', { name:'Danny'},{age:20})
  // em.add('aa',({ name},{age}) => console.log(name,age))
  removeEvent<K extends keyof Event>(type: K, callBack: (...arg: Event[K]) => void) {
    const callBacks = this.events.get(type) || []
    this.events.set(type, callBacks.filter(cb => cb !== callBack))
    return this
  }
  removeBytype<K extends keyof Event>(type: K) {
    this.events.delete(type)
    return this
  }
  emit<K extends keyof Event>(type: K, ...args: Event[K]) {
    const callBacks = this.events.get(type) || []
    callBacks.forEach(callBack => {
      callBack(...args)
    })
  }
  listeners<K extends keyof Event>(type: K) {
    return Object.freeze(this.events.get(type) || [])
  }

}