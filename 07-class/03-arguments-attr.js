var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    Animal3.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal3;
}());
