class CacheClass {
  cache: Map<string, number> = new Map()
  constructor(cache?: Map<string, number>) {
    if (cache) {
      this.cache = cache
    }
  }
  isBlocked(identifier: string) {
    if (!this.cache.has(identifier)) {
      return { blocked: false, reset: 0 };
    }
    const reset = this.cache.get(identifier) || 0
    if (reset < Date.now()) {
      return this.cache.delete(identifier)
    }
    return { blocked: true, reset: reset };
  }
  blockUntil(identifier: string, reset: number) {
    this.cache.set(identifier, reset)
  }
  set(key: string, value: number) {
    this.cache.set(key, value)
  }

  get(key: string) {
    return this.cache.get(key)
  }

  incr(key: string) {
    let value = this.cache.get(key) || 0
    value += 1
    this.cache.set(key, value)
    return value
  }


}

