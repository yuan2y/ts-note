// 1. 方法的泛型
function log(s: string): string {
  return s;
}
let Str = log('1');

function log2<T>(s: T): T {
  return s;
}
let Str1 = log2<string>('1');
let Str2 = log2<number>(1);
let Str3 = log2<boolean>(false);

// 2. 接口的泛型
interface Print<T,K> {
  fn(s:T):T;
  number:K;
}

let obj:Print<number,string> = {
  fn(s:number){
      console.log(s)
      return s;
  },
  number:'xxxx'
}
console.log(obj)
obj.fn(2023)

