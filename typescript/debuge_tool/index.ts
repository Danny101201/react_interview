function sayHello(name: string): void {
  let message = `Hello ${name}!`;
  console.log(message);
  if (name == 'TypeScript') {
    console.log('.ts');
  }
  else if (name == 'JavaScript') {
    console.log('.js');
  }
}

sayHello('TypeScript');
sayHello('JavaScript');