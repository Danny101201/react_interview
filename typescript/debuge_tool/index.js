"use strict";
function sayHello(name) {
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
//# sourceMappingURL=index.js.map