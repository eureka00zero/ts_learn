var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//基础类型string, boolean, number, null, undefined
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = "kate";
sayHello(user);
// void返回值
function alertName() {
    alert('My name is Tom');
}
//any类型
var anyNumber = 'seven';
var anyNumberAutoAny;
anyNumber = 7;
anyNumberAutoAny = 'seven';
anyNumberAutoAny = 7;
//未指定类型 TS也会按照当前的变量值推断类型  ANY则会跳过类型检查
//联合类型,只可以为string或number,当变量不确定时，只能访问联合类型的共有属性,当最终确定变量时要按照该变量的规范使用。
var unionNumber;
unionNumber = 'seven';
unionNumber = 7;
var tom = {
    id: 123,
    name: 'Tom',
    gender: 'male'
};
var fibonacci = [1, 1, '2', 3, 5];
var fibonacciInter = [1, 1, 2, 3, 5];
//函数的可选参数后面不允许再出现必须参数了,TypeScript 会将添加了默认值的参数识别为可选参数，带默认值的参数可以在其他参数前面
//可以使用ES6的rest方法定义剩余参数，但rest参数只能放到最后
var mySum = function (x, y, lastName, firstName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    var items = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        items[_i - 4] = arguments[_i];
    }
    return x + y;
};
//如果想用联合类型其中一个类型的私有方法  可以使用断言类型 类似java的强制类型转换，但只能断言为联合类型存在的类型
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
function handleEvent(ele, event) {
    // do something
}
//类 protected 允许在子类中使用，private子类也不可使用 
//可以用abstract来创建抽象类，抽象类不能够创建实例，且子类必须实现抽象方法
//可以使用implements来实现接口
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = "123";
        this.name = name;
    }
    Animal.isAnimal = function (a) {
        return a instanceof Animal;
    };
    Animal.prototype.sayHi = function () {
        console.log("hi");
    };
    Animal.num = 42;
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.sayHi = function () {
        return 'Meow, ' + _super.prototype.sayHi.call(this); // 调用父类的 sayHi()
    };
    return Cat;
}(Animal));
var a = new Animal('Jack');
//a.num = "123";
Animal.isAnimal(a); // true
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
