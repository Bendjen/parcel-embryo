
const decorator1 = `@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true
`
const decorator2 = `class Person {
    @readonly
    name() { return "testText" }
  }
`
const decorator3 = `function readonly(target, name, descriptor){
    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };
    descriptor.writable = false;
    return descriptor;
  }
  //等同于
  readonly(Person.prototype, 'name', descriptor);
`
const decorator4=`var readOnly = require("some-decorator");

@readOnly
function foo() {
}
`

const decorator5=`var readOnly;

@readOnly
function foo() {
}

readOnly = require("some-decorator");
`

const decorator6 =`function doSomething(name) {
    console.log('Hello, ' + name);
  }
  
  function loggingDecorator(wrapped) {
    return function() {
      console.log('Starting');
      const result = wrapped.apply(this, arguments);
      console.log('Finished');
      return result;
    }
  }
  
  const wrapped = loggingDecorator(doSomething);
`
export {decorator1,decorator2,decorator3,decorator4,decorator5,decorator6}