console.log('hello world!')

// priv is 12
let priv = 12
if (1 < 2) {
    let priv = 14
}
console.log(`priv is: ${priv}`)

// second is: 15
var second = 10
if (2 > 1) {
    var second = 15
}
console.log(`second is: ${second}`)

// let can be undefined
let test
console.log('test type is: ' + typeof(test))

// var also can be undefined
var test3
console.log('test3 is: ' + test3)

// const test3 - error, const must be initialized
// console.log('test3 is: ' + test3)

// keys can be strings only
const myObj = {
    'first-with-hyphons': 15,
    'second-with-hyphons': 12
}
console.log(myObj['first-with-hyphons'])
console.log(myObj['second-with-hyphons'])

// arrays in square brackets separated by commas
// may store any data types
let myArr = [1, 2, 10, 15, 50, 100, "hello", undefined, {
    hello: "world",
    hi: "privet"
}]
console.log(myArr)
console.log('very first element in the array is: ' + myArr[0])
console.log(myArr[myArr.length-3])
console.log(myArr[myArr.length-1])

// type conversions
// numerics will be converted to a strings when they are used with + operator
console.log(23+'32') // 2332
console.log('32'+23) // 3223
console.log(true + '3') // true3

// numeric string will be automatically converted to a number when using with all operations except "+"
console.log('321'-'22') // 299
console.log('321'*2)    // 642
console.log('321M'*2)   // NaN = Not a Number

// implicit conversions
console.log(true + 3)    // 4
console.log(true - 3)    // -2
console.log(true + true) // 2

console.log('123' + null)   // 123null
console.log('123M' + null)  // 123Mnull
console.log(true + null)    // 1

console.log('123' + undefined)   // 123null
console.log('123M' + undefined)  // 123Mnull
console.log(true + undefined)    // NaN

// explicit conversions
console.log(Number('123'))  // 123
console.log(Number('123M')) // NaN
console.log(Number(true))   // 1 
console.log(Number(''));    // 0
console.log(Number('  '));  // 0

console.log(String(500))       // 500
console.log(String(undefined)) // indefined
console.log(String(true))      // true

console.log(Boolean('123'));   // true
console.log(Boolean(''));      // false
console.log(Boolean('   '));   // true
console.log(Boolean(0));       // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false
console.log(Boolean(NaN));       // false

console.log((500).toString())       // 500
console.log((true).toString())      // true
// console.log((undefined).toString()) // error
// console.log((null).toString())      // error

console.log(parseInt('101', 2))    // 5
console.log(parseFloat('101.333')) // 101.333
console.log(parseFloat('101,333')) // 101 !!!

console.log(null + undefined); // null = 0, undefined = NaN. 0 + NaN = NaN. 
console.log(Boolean(null + undefined)); // null = 0, undefined = NaN. 0 + NaN = NaN. Boolean(NaN) = false.

// equality
console.log('10' == '10');  // true
console.log('10' === '10'); // true

console.log(10 == '10');    // true. converts str to a number
console.log(10 === '10');   // false

console.log(11 == '10');    // false. converts str to a number
console.log(11 === '10');   // false

console.log(2 > undefined) // false
console.log(2 > NaN)       // false
console.log(2 > null)      // true

console.log('-------------');

switch(10) {
    case '123':
        console.log('hey!');
        break;
    case '10':
        console.log('RRR');
        break;
    case 10:
        console.log('ok!');
        break;
    case '456':
        console.log('priv!');
        break;
    default:
        console.log('default!');
}

const myArr1 = [1, 2, 3]
for (val of myArr1) {
    console.log(`current: ${val}`);
}

function name1() {
    console.log('hey!');
}
name1()

name2 = function() {
    console.log('hello world!');
}
name2()

name3 = () => {
    console.log('123!');
}
name3()

// -----------------------------

function test1() {
    let a = 0
    function test2() {
        a++
        console.log(a);
    }
    test2()
}
test1() // 1
test1() // 1


function test1() {
    let a = 0
    function test2() {
        a++
        console.log(a);
    }
    return test2
}

const myfun = test1()
myfun() // 1
myfun() // 2 (because of a closure saved within the function)

// currying – каррирование

function log(time, severity, message) {
    console.log(`${time} [${severity}] ${message}`);
}

function curry(fn) {
    return function log(time) {
        return function f2(severity) {
            return function f3(message) {
                fn(time, severity, message)
            }
        }
    }
}

log = curry(log)
logNow = log(new Date().toLocaleString())
logNow('INFO')('hello, world!')

logNowInfo = logNow('INFO')
logNowInfo('oh my god!')

// this keyword implicit binding
const myObj1 = {
    text: 'Lorem isum dolor sit amet',
    myF: function() {
        console.log(this.text);
    }
}
myObj1.myF()

// this keyword explicit binding
function myNewFunc() {
    console.log(this.text);
}
myNewFunc.call(myObj1)

// this keyword new binding (constructor function)
function Person(personName) {
    this.name = personName
}
person1 = new Person('name1')
person2 = new Person('name2')
logNowInfo(`person1 name is: ${person1.name}`)
logNowInfo(`person2 name is: ${person2.name}`)

// default this binding (this means global object)
function myNewFunc() {
    console.log(this.text);
}
text = '1234'
globalThis.text = '432'
myNewFunc()
myNewFunc()

// prototypes (adding functions to every object)
function Person(personName) {
    this.name = personName
}
person1 = new Person('name1')
person2 = new Person('name2')
person1.greeting = function() {
    logNowInfo(`${this.name} says hi!`)
}
person1.greeting()
// person2.greeting() – error
// make usage of prototypes instead:
Person.prototype.greeting = function() {
    logNowInfo(`${this.name} says hi!`)
}
Person.prototype.description = 'my description'
person2.greeting()
console.log(person1.description);

// prototype inheritance
function Object1(x1, y1) {
    this.x1 = x1
    this.y1 = y1
}
Object1.prototype.read1 = function() {
    console.log(`x1: ${this.x1}, y1: ${this.y1}`);
}
const t1 = new Object1(1, 2)
t1.read1()

function Object2(z1, x1, y1) {
    this.z1 = z1
    Object1.call(this, x1, y1) // inherit fields
} 
Object2.prototype = Object.create(Object1.prototype) // inherit functions. JS will check current object first, 
                                                     // and if it will not find that, it will check that reference
Object2.prototype.read2 = function() {
    console.log(`z1: ${this.z1}`);
}
Object2.prototype.constructor = Object2 // bit of a cleanup
const t2 = new Object2(3, 1, 2)
t2.read2()
console.log(`t2 x1 y1: ${t2.x1}, ${t2.y1}`);
t2.read1()

// classes 

class MyTestClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    myFunction() {
        console.log(`name is: ${this.name}, age is: ${this.age}`);
    }
}

const obj1 = new MyTestClass('name', 30)
obj1.myFunction()

class MyNewTestClass extends MyTestClass {
    constructor(name, age, additional) {
        super(name, age)
        this.additional = additional
    }

    toStringNew() {
        console.log(`one: ${this.name}, two: ${this.age}, three: ${this.additional}`);
    }
}

const obj2 = new MyNewTestClass('new_name', 35, 'additional!!!')
obj2.toStringNew()

// iterables
const my_var = 'hello world!'
for (let i = 0; i < my_var.length; i++) {
    console.log(`current symbol is: ${my_var.charAt(i)}`);
}

myArr = [1, true, undefined, null]
for (let i = 0; i < myArr.length; i++) {
    console.log(`current arr element is: ${myArr[i]}`);
} 

for (symbol of my_var) {
    console.log(`1: ${symbol}`);
}
for (element of myArr) {
    console.log(`2: ${element}`);
}

// custom iterable
const myObj3 = {
    [Symbol.iterator]: function() {
        let done = false
        const iter = {
            next() {
                const data = {
                    value: "custom_iterator",
                    done: done,
                }
                done = true
                return data
            }
            
        }
        return iter
    }
}
for (it of myObj3) {
    console.log(`res: ${it}`);
}

// generators
function* myGenerator() {
    yield "raz"
    yield "dva"
    yield "tri"
}

const new_iter = myGenerator()
for (element of new_iter) {
    console.log(`val is: ${element}`);
}