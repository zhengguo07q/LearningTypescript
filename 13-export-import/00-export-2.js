"use strict";
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
exports.__esModule = true;
exports.ZipCodeValidator = exports.numberRegexp = void 0;
var _00_export_1_1 = require("./00-export-1");
exports.numberRegexp = /^[0-9]+$/;
var StringValidator1 = 1;
var ZipCodeValidator = /** @class */ (function (_super) {
    __extends(ZipCodeValidator, _super);
    function ZipCodeValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeValidator;
}(_00_export_1_1["default"]));
exports.ZipCodeValidator = ZipCodeValidator;
