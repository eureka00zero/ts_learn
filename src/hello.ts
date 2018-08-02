//基础类型string, boolean, number, null, undefined
function sayHello(person: string){
    return 'Hello, '+ person;
}

let user = "kate"
sayHello(user);

// void返回值
function alertName(): void {
    alert('My name is Tom');
}

//any类型
let anyNumber: any = 'seven';
let anyNumberAutoAny;
anyNumber = 7;
anyNumberAutoAny = 'seven'
anyNumberAutoAny = 7

//未指定类型 TS也会按照当前的变量值推断类型  ANY则会跳过类型检查


//联合类型,只可以为string或number,当变量不确定时，只能访问联合类型的共有属性,当最终确定变量时要按照该变量的规范使用。
let unionNumber: string | number;
unionNumber = 'seven';
unionNumber = 7;


//接口，TS的接口很灵活 可以直接看做是变量模板，相比java只能规定类要宽松一些 ，但继承的变量必须保持和接口完全一致，可以使用可选属性和任意属性

//如果只有可选属性，可以没有该属性，但不能添加多余属性  如果有任意属性那必须还要有确定属性和可选属性
//只读属性代表只希望在对象创建的时候被赋值   只读属性只能在创建的时候赋值，实体必须存在且除创建外不可再次赋值
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id:123,
    name: 'Tom',
    gender: 'male'
};

let fibonacci: (number | string)[] = [1, 1, '2', 3, 5];

interface NumberArray {
    [index: number]: number;
}
let fibonacciInter: NumberArray = [1, 1, 2, 3, 5];

//函数的可选参数后面不允许再出现必须参数了,TypeScript 会将添加了默认值的参数识别为可选参数，带默认值的参数可以在其他参数前面
//可以使用ES6的rest方法定义剩余参数，但rest参数只能放到最后
let mySum: (x: number,y: number) => number = function(x: number, y: number, lastName: string = 'Cat',firstName?: string ,...items: any[] ):number {
    return x + y;
};


//如果想用联合类型其中一个类型的私有方法  可以使用断言类型 类似java的强制类型转换，但只能断言为联合类型存在的类型
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}


//字符字面量，EventNames只能是定义中的三个

type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}


//类 protected 允许在子类中使用，private子类也不可使用 
//可以用abstract来创建抽象类，抽象类不能够创建实例，且子类必须实现抽象方法
//可以使用implements来实现接口
class Animal {
    static isAnimal(a) {
        return a instanceof Animal;
    }

    protected name = "123";
    private  static num = 42;

    sayHi(){
        console.log("hi")
    }

    constructor(name) {
        this.name = name;
    }
    // get name() {
    //     return 'Jack';
    // }
    // set name(value) {
    //     console.log('setter: ' + value);
    // }
}

class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        console.log(this.name);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}


let a = new Animal('Jack');
//a.num = "123";
Animal.isAnimal(a); // true
//a.isAnimal(a); // TypeError: a.isAnimal is not a function

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
