var x;
if (x) {
    f(x); // 正确，这里的x类型是number
}
else {
    f(x); // 错误，这里的x类型是number？
}
var a = x != null ? f(x) : ""; // a的类型是string
var b = x && f(x); // b的类型是 string | 0 | null | undefined
