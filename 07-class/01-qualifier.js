var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    return Animal1;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal1));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal1("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
//animal = employee;
