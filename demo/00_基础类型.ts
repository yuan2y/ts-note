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