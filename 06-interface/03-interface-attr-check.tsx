//一般情况下编译通不过，在实参处会进行检查
//有三种绕过检查的方式
////1使用类型断言可以绕开
////2在属性中定义拥有任意其他属性  ：[propName: string]:any; 
////3跳跃赋值

let cc:Console = require("console");


interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]:any;         //这个定义，是代表任意其他属性
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return {color:"", area:1};
}

let mySquare1 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); //断言绕开，能编译通过，但是其实会出问题

let squareOptions = { colour: "red", width: 100 };//跳跃赋值也可以通过
let mySquare2 = createSquare(squareOptions);

cc.debug(mySquare1);
//这里是通过任意属性绕开
let mySquare3 = createSquare({ colour: "red", width: 100 });
