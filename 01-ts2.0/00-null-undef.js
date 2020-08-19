// 使用--strictNullChecks参数进行编译的
var x;
var y;
var z;
x = 1; // 正确
y = 1; // 正确
z = 1; // 正确
x = undefined; // 错误
y = undefined; // 正确
z = undefined; // 正确
x = null; // 错误
y = null; // 错误
z = null; // 正确
x = y; // 错误
x = z; // 错误
y = x; // 正确
y = z; // 错误
z = x; // 正确
z = y; // 正确
