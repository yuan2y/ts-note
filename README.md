# ts-note
`TypeScript`

## 基本类型

```ts
// 布尔值 boolean
let isDone: boolean = true;

// 数字 number 
let year: number = 2023;

// 字符串 string
let str: string = 'string';
str = 'hello word';

// undefined
let un: undefined = undefined;

// null
let timer:null = null;


// any 在编程阶段还不清楚类型变量指定的类型
let notSure:any = 4;
notSure = "str";
notSure = false;
notSure = undefined;
notSure = null;

// unknown 为了防止过于开放的any，避免一些程序上的错误，推出unknown（未知）
let unk2:unknown = 'abc'; 
// 特例
let testUnk:any = unk2;
// let testNun2:number = unk2; // 不能将类型“unknown”分配给类型“number”
// 场景:判断后，编译器动态分析
if (typeof unk2 === 'string') {
    let testStr2:string = unk2;
}

// never 永不存在的类型
function error(message: string): never {
    throw new Error(message);
}

// 数字类型数组
let arrNumber: number[] = [1, 2];
// 字符串类型数据
let arrString: string[] = ['a', 'b'];
let arr: any[] = ['a',1,'b',true]
// 另一种写法
let arrNumber2: Array<number> = [1];
let arrString2: Array<string> = ['a'];
let arr2: Array<any> = [1, 'sss', false];

// 多维数组
let arr10: number[][] = [[1], [2]];
// 灵活数组
let arr20: any[][] = [[1, 'f'], ['s']];

// 元组
let arr30: [string, number, boolean] = ['s', 1, true]
let arr40: [string, number, boolean][] = [
    ['s', 1, true]
];

// 对象
let o: Object = { a: 1, arr: [{ cc: 111 }] }
let o1: Object = { b: 1 }
let o2: Object = o;
```



## 函数

```tsx
// 默认隐式void返回值
function fn(x: number, y: number){
  let sum: number = x + y
}
fn(10,20)

// 函数 指定类型返回值
function fn2(x: number, y: number):number{
  return x + y
}
fn2(10,20)
console.log(fn2(10,20)) // 30

//函数 可选参数
function buildName(firstName: string, lastName?: string):string {
  return firstName + " " + lastName;
}
let result1 = buildName("Bob"); 
console.log(result1)
let result2 = buildName("Bob", undefined);
console.log(result2)    
let result3 = buildName("Bob", "Adams"); 
console.log(result3)
// let result4 = buildName("Bob", "Adams", "Sr.");   

// 函数 默认参数
function buildName2(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}
let result12 = buildName2("Bob"); 
console.log(result12)
let result22 = buildName2("Bob", undefined);
console.log(result22)    
let result32 = buildName2("Bob", "Adams"); 
console.log(result32)
// let result4 = buildName2("Bob", "Adams", "Sr.");

// 函数 剩余参数
function buildName3(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName)


// 函数 联合类型返回值
function fn3(p1:string|number):string|number {
  return p1;
}
fn3(1);
fn3('x');

// 函数 重载（参数列表不同，名称返回值相同）
function fn4(p1:string,n2:number):any
function fn4(p1:string,n2:string):any
function fn4(p1:number,n2:number):any
function fn4(p1:number,n2:string):any
function fn4(p1:number):any
function fn4(p1:string):any
function fn4(p1:any,n2?:any):any {
  console.log(p1,n2,'参数列表')
  return 1;
}
fn4('a',1);
fn4(1);
fn4('a');
fn4(1,3);
fn4('a','b');
fn4(1,'b');
```



## 接口

```ts
interface Person {
  eat(food:string):void;
}
// 接口复用：接口可以集成接口(单继承)
interface Person2 extends Person {
  name: string;
  arr?: number[], // ?可选的
  readonly age: number; // readonly只读
  fn(p1: number): void
}

let obj: Person2 = {
  name: 'Sum', 
  arr: [1], 
  age: 36,
  fn: function (num: number) {
      console.log('调用', num);
  },
  eat: function (food: string): void {
      console.log('在吃...',food)
  }
};
// obj.age = 122; // 无法为“age”赋值，因为它是只读属性
console.log(obj);
console.log(obj.fn(1));
console.log(obj.eat('米饭'));

// 可以多实现 : 实现接口中未实现的方法和属性 (类实现接口)
class Person2Class implements Person2{
  arr?: number[] | undefined;
  age: number = 18;
  name:string = 'Green';
  fn(p1: number): void {
      console.log('方法fn')
  }
  eat(food: string): void {
      console.log('方法eat')
  }
}
let person2Class = new Person2Class();
console.log(person2Class.age);
console.log(person2Class.fn(1));
console.log(person2Class.eat('米饭'));
```



## 类

```ts

class Animal {
  // 属于实例的属性，叫做成员变量
  public readonly name:string; // 公开的
  private age:number; // 私有的 只能自己访问
  protected  color:string = 'white'; // 受保护的 只能自己和子类访问
  readonly isSkill:boolean = true; // 只读的
  static staticTest:number = 1; // 静态的  每个实例想要访问这个属性的时候，都要在staticTest前面加上类名。
  constructor(name:string,age:number){
      this.name = name;
      this.age = age;
  }
  showAnimal(){
      console.log(this.name,this.age,this.color);
  }
  showAnimal2(){
      console.log(Animal.staticTest,this.isSkill);
  }
  // 属于类的属性
  static staticShow(){
      console.log('staticShow')
  }
}

let animal = new Animal('哈士奇',12);
console.log(animal.name,'默认作用域直接访问');
animal.showAnimal();
Animal.staticShow();
console.log(Animal.staticTest)
// console.log(animal.age); // 属性“age”为私有属性，只能在类“Dog”中访问

// 子类Dog 继承 父类Animal
class Dog extends Animal {
  constructor(){
      super('小白',18);
      console.log(super.color);
  }
  showAnimal(): void {
      console.log('子类的showAnimal')
  }
}
let dog = new Dog();
dog.showAnimal(); // 同名就近调用
dog.showAnimal2(); // 父类方法


```

