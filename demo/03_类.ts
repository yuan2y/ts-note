
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

