type EventType = string | number
export type BaseEvent = Record<EventType, any[]>
/**
 * 事件總線
 * 實際上就是發布訂閱模式的一種簡單實現
 * 類型定義受到{ @link https://github.com/andywer/typed-emitter/blob/master/index.d.ts} 的啟發，不過只需要宣告參數就好了，而不需要傳回值（應該是{ @code void}）
 */
export class EventEmitter<Events extends BaseEvent> {
  private readonly events = new Map<keyof Events, Function[]>()
  /**
 * 新增一個事件監聽程序
 * @param type 監聽至種類
 * @param callBack 處理回調
 */
  add<E extends keyof Events>(type: E, callBack: (...arg: Events[E]) => void) {
    const callBacks = this.events.get(type) || []
    callBacks.push(callBack)
    this.events.set(type, callBacks)
    return this
  }
  /**
 * 移除一個事件監聽程序
 * @param type 監聽型
 * @param callback 處理回調
 * @returns { @code this }
 */
  remove<E extends keyof Events>(type: E, callBack: (...arg: Events[E]) => void) {
    const callBacks = this.events.get(type) || []
    this.events.set(
      type,
      callBacks.filter(fn => fn !== callBack)
    )
    return this
  }
  /**
   * 移除一類事件監聽程序
   * @param type 監聽型
   * @returns { @code this }
   */
  removeByType<E extends keyof Events>(type: E) {
    this.events.delete(type)
    return this
  }
  /**
  * 觸發一類事件監聽程序
  * @param type 監聽型
  * @param args 處理回呼所需的參數
  * @returns { @code this }
  */
  emit<E extends keyof Events>(type: E, ...arg: Events[E]) {
    const callBacks = this.events.get(type) || []
    callBacks.forEach(callBack => {
      callBack(...arg)
    })
    return this
  }
  /**
   * 取得一類事件監聽程序
   * @param type 監聽型
   * @returns一個唯讀的數組，如果找不到，則回傳空數組{ @code []}
   */
  listeners<E extends keyof Events>(type: E) {
    return Object.freeze(this.events.get(type) || [])
  }
}
