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