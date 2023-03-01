// 1.接口定义对象
interface IPerson {
  id: number;
  name: string;
  age?: number; // 可选属性
  [propName: string]: any; // 预留属性
  say(word: string): string;
  eat(food: string): void;
}
// 对象使用
let person: IPerson = {
  id: 1,
  name: 'hello',
  age: 20,
  say(word) {
    console.log(this.name + ' say ' + word);
    return word;
  },
  eat(food) {
    console.log(this.name + ' eat ' + food);
  },
};
console.log(person);
person.say('world'); // hello say world
person.eat('apple'); // hello eat apple
// 对象使用2
let person2: IPerson = {
  id: 2,
  name: 'hello2',
  say(word) {
    console.log(this.name + ' say ' + word);
    return word;
  },
  eat(food) {
    console.log(this.name + ' eat ' + food);
  },
};
console.log(person2);
person2.say('world2'); // hello2 say world2
person2.eat('apple2'); // hello2 eat apple2

// 2. 接口定义函数
interface ISay<T> {
  (word: T): T;
}
// 函数使用
const say: ISay<string> = (word: string) => {
  return word;
};

// 3. 接口类的实现（可以共用定义对象接口，类里面进行一一实现）
class User implements IPerson {
  id: number = 1;
  name: string;
  constructor(name:string){
    this.name = name
  }
  say(word: string): string {
    console.log("类实现接口 " + this.name + ' say ' + word);
    return word;
  }
  eat(food: string){
    console.log("类实现接口 " + this.name + ' eat ' + food);
  }
}
// 类使用
let user:User = new User('Sunny');
user.say("hello world！");
user.eat("fish");

//4. 接口对同名可以自动合并
interface IUser {
  name: string
};
interface IUser{
  age:number
};
let user2:IUser = {
  name:'user2',
  age:18
};

// 5. 接口继承：  原接口定义可以全部拿到,新定义可以添加自己属性与方法
interface ITeach extends IPerson {
   city:string,
   phone?: number,
   showName():void
}

let teach:ITeach = {
  id: 3,
  name: 'Lucas',
  age: 18,
  city: 'china',
  say(word) {
    console.log("接口继承：" + this.name + ' say ' + word);
    return word;
  },
  eat(food) {
    console.log("接口继承: " + this.name + ' eat ' + food);
  },
  showName() {
    console.log("接口继承：" + this.name + "新接口自己的方法");
  },
};
console.log(teach);
teach.say('hi');
teach.eat('food')
teach.showName()
