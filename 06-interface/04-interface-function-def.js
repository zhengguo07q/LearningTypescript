//let mySearch1: SearchFunc;
var mySearch1 = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var mySearch3 = { a: function (source, subString) {
        var result = source.search(subString);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    }, b: function (url, src, sub) {
        var result = src.search(sub);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    }
};
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
