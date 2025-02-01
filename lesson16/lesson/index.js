
// const obj = {
//     name: 'John',
//     age: 20,
//     greet: function () {
//         console.log(`hello, my name is ${this.name}`);
//     }
// }
// obj.greet()


// const objArrow = {
//     name: 'John',
//     age: 20,
//     greet: () => {
//         console.log(`hello, my name is ${this.name}`);
//     }
// }
// objArrow.greet()



// const obj = {
//     name: 'John',
//     age: 20,
//     greet: function () {
//         console.log(`hello, my name is ${this.name}`);
//     }
// }


// const obj2 = {
//     name: 'Nick',
//     age: 54,
// }

// obj.greet.bind(obj2)(); // Можно передать контекст вторым аргументом
// obj.greet.apply(obj2, []); // Тоже самое, но не нужно вызывать функцию


// obj.greet.bind({name: 'Bind', age: 30})(); // Можно изменить какие-то параметры
// obj.greet.call({name: 'Call', age: 40}); // Тоже самое, но не нужно вызывать функцию
// obj.greet.apply({name: 'Apply', age: 30}, []); // Можно еще передать что-то (изменить значение функции в скобках)





// КЛАССЫ
//ДЛЯ УПРОЩЕНИЯ РАБОТЫ С ОБЪЕКТАМИ И ЕСЛИ НУЖНЫ ОДИНАКОВЫЕ СВОЙСТВА ДЛЯ МНОГИХ ОБЪЕКТОВ
// class Person {
//     constructor(name, age) {
//     this.name = name;
//     }
//     greet() {
//     console.log(`Hello, my name is ${this.name}`);
//     }
//     }
//     const alice = new Person('Alice');
//     alice.greet(); // Hello, my name is Alice


// class Animal {
//     constructor(name) {
//     this.name = name;
//     }
//     greet() {
//         console.log(`my name is ${this.name}`);
//     }
// }

// class Dog extends Animal {      // Класс Dog наследует Animal, в него входят все свойства Animal
//     bark() {
//     console.log(`${this.name} Гавкает!`);
//     }
// }
// const rex = new Dog('Rex', 'Бульдог')
// rex.greet(); // my name is %{this.name}
// rex.bark(); // ${this.name} Гавкает!
