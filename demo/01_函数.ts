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