function log(originalMethod: any, context: ClassMethodDecoratorContext) {
  return async function methods(this: any, ...args: any[]) {
    console.log(`${context.name.toString()} called with ${args}`)
    const result = await originalMethod.call(this, ...args)
    return result
  }
}

class SDK {
  @log
  async getUser(id: string) {
    return Promise.resolve({
      uid: id
    })
  }
  @log
  async getPost(id: string) {
    return Promise.resolve(
      {
        postID: id
      }
    )
  }
}