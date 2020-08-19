// 使用--strictNullChecks参数进行编译的
let x: number;
let y: number | undefined;
let z: number | null | undefined;
x = 1;  // 正确
y = 1;  // 正确
z = 1;  // 正确
x = undefined;  // 错误
y = undefined;  // 正确
z = undefined;  // 正确
x = null;  // 错误
y = null;  // 错误
z = null;  // 正确
x = y;  // 错误
x = z;  // 错误
y = x;  // 正确
y = z;  // 错误
z = x;  // 正确
z = y;  // 正确

//这样做的目的，是为了兼容，以前有些变量不能确定是否为null和undef的。 let x:number|null|undefined
//最新的明确了number后，则不可能赋值为null或者undef

// 使用--strictNullChecks参数进行编译
type T1 = (x?: number) => string;              // x的类型是 number | undefined
type T2 = (x?: number | undefined) => string;  // x的类型是 number | undefined

//参数包含? 则代表为可选参数，此时自动包含null或者undef支持

