var Greeter6 = /** @class */ (function () {
    function Greeter6(message) {
        this.greeting = message;
    }
    Greeter6.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter6;
}());
var greeter6 = new Greeter6("world");
