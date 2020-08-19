//被支持的普通：布尔型，数字，字符串，
//复合类型：数组，元组，枚举
//为兼容以前格式的类型：any， void, undefined
//类型断言(<string>str_type).length  (str_type as string).length 因为jsx的<>使用在react中，则jsx不支持<>断言


//布尔值
let isDone: boolean = false;

//数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

//字符串
let name1: string = "bob";
name1 = "smith";

let name2: string = `Gene`;
let age: number = 37;
let sentence1: string = `Hello, my name is ${ name }.        //字符串中引用变量\${}
I'll be ${ age + 1 } years old next month.`;

let sentence2: string = "Hello, my name is " + name + ".\n\n" +     //使用+ +方式引用变量
    "I'll be " + (age + 1) + " years old next month.";

//数组
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];       //带有范性的数组

//元组
// Declare a tuple type
let x1: [string, number];
// Initialize it
x1 = ['hello', 10]; // OK 元祖初始化必须按照类型顺序来
// Initialize it incorrectly
// x1 = [10, 'hello']; // Error 

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型

//枚举
enum Color1 {Red1, Green1, Blue1};       //默认索引从0开始
let c1: Color1 = Color1.Green1;

enum Color2 {Red2 = 1, Green2, Blue2};   //指定索引从1开始
let c2: Color2 = Color2.Green2;

enum Color3 {Red3 = 1, Green3 = 2, Blue3 = 4};   //全部手动赋值
let c3: Color3 = Color3.Green3;

enum Color4 {Red4 = 1, Green4, Blue4};          //通过索引获得名字
let colorName: string = Color4[2];

alert(colorName);

//任意值，就是可以填写任何数值，让编译器忽略这个的检查，一般用来改动之前代码用，无论是类型，还是包含的方法都不做检查
let notSure1: any = 4;
notSure1 = "maybe a string instead";
notSure1 = false; // okay, definitely a boolean

let notSure2: any = 4;
notSure2.ifItExists(); // okay, ifItExists might exist at runtime
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;     
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
//复杂类型数据时也可以使用
let list: any[] = [1, true, "free"];

list[1] = 100;

//void，一般用在返回上
function warnUser(): void {
    alert("This is my warning message");
}

let unusable: void = undefined;
//归属没有多大用的类型，void undefined null
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

//never可以赋予给任何类型，但是其他类型不可以赋予给never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

//类型断言 as

let someValue2: any = "this is a string";

let strLength2: number = (someValue2 as string).length;