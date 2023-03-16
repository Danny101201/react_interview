type ClassConstructor<T> = {
  new(...args: any[]): T;
};

interface PersonInfo {
  name: string
  getName(): string
}
class Person implements PersonInfo {
  constructor(
    public name: string
  ) { }
  getName() {
    return this.name
  }
}
const personInstance = (a: ClassConstructor<PersonInfo>, name: string) => {
  const instance = new a(name)
  console.log(instance.getName())
}
personInstance(Person, 'Danny')

