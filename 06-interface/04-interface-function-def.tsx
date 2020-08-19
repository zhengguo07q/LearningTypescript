//在接口中定义函数
//默认赋值函数，只能接受第一个函数
interface SearchFunc {
    (source: string, subString: string): boolean;
    (url:string, source: string, subString: string): boolean;
}


//let mySearch1: SearchFunc;
const mySearch1 =function (source: string, subString: string) {
  let result = source.search(subString);
  if (result == -1) {
    return false;
  }
  else {
    return true;
  }
}

const mySearch3 ={a:function (source: string, subString: string) {
    let result = source.search(subString);
    if (result == -1) {
      return false;
    }
    else {
      return true;
    }
  },b:function(url:string, src: string, sub: string): boolean {
    let result = src.search(sub);
    if (result == -1) {
      return false;
    }
    else {
      return true;
    }
  }
}
/** 
let mySearch2: SearchFunc;
mySearch2 = function(url:string, src: string, sub: string): boolean {
  let result = src.search(sub);
  if (result == -1) {
    return false;
  }
  else {
    return true;
  }
}
*/