// 使用--strictNullChecks参数进行编译
declare function f(x: number): string;
let x: number | null | undefined;
if (x) {
    f(x);  // 正确，这里的x类型是number
}
else {
    f(x);  // 错误，这里的x类型是number？
}
let a = x != null ? f(x) : "";  // a的类型是string
let b = x && f(x);  // b的类型是 string | 0 | null | undefined