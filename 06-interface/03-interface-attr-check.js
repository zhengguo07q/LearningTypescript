//编译通不过，在实参处会进行检查
//使用类型断言可以绕开
var cc = require("console");
function createSquare(config) {
    return { color: "", area: 1 };
}
var mySquare1 = createSquare({ width: 100, opacity: 0.5 }); //断言绕开，能编译通过，但是其实会出问题
var squareOptions = { colour: "red", width: 100 }; //跳跃赋值也可以通过
var mySquare2 = createSquare(squareOptions);
cc.debug(mySquare1);
var mySquare3 = createSquare({ colour: "red", width: 100 });
