// 类型约束: 基本数据类型可以直接使用string、number；引用数据类型有  Array、Object
type Ts5 = string;
let s61: Ts5 = 'xxx';
type Ts51 = Ts5 | number; // 1 代表联合类型 ts52 此时是string 或 number
let s52: Ts51 = 'xx';
let s53: Ts51 = 123;
type ts52 = Ts5 & Ts51;  // & 代表交叉类型 ts52 此时是string
let ts53: ts52 = '1';

// 交叉类型
interface IObject51 {
  name: string;
}
interface IObject52 {
  age: number;
}
let obj5: IObject51 & IObject52 = {
  name: 'xxx',
  age: 12,
};
console.log(obj5)

// 联合类型
let a5: number | string | boolean = 'aaa';


// 找不同
type DiffValue<T,U> = T extends U ? never:T;
type NotNull<Z> = DiffValue<Z,undefined|null>
type Res4 = NotNull<number|undefined>;
type Res5 = NotNull<string|number|undefined>;
type Res6 = NotNull<boolean|string|number|undefined>;
function ff(s:Res6) {
    return s;
}
ff(1);
ff('s');
ff(false);
// ff(null);


function ff2<T,K extends keyof T>(obj:T,keys:K[]):T[K][]{
  return keys.map((k:K)=>{
      return obj[k]
  });
}
interface IObject5 {
  a:number;
  b:number;
  c:number
}
let obj81 = {
  a:1,
  b:2,
  c:3
}
ff2(obj81,['a','b','c']);
type OKeys = keyof IObject5;
let res51 = ff2<IObject5,OKeys>(obj81,['a','b']);
let res52 = ff2<IObject5,'a'|'b'|'c'>(obj81,['a','b',]);
console.log(res51,res52);


