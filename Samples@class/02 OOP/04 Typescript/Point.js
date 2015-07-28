var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        //await setTimeout(1000);
        //await doSomething();
        //doOneMoreThing();
        //setTimeout(function () {
        //    doSomething(function () {
        //        doOneMoreThing();
        //    });
        //}, 1000);
    }
    return Point;
})();
exports.Point = Point;
var PointEx = (function (_super) {
    __extends(PointEx, _super);
    function PointEx(x, y, z) {
        _super.call(this, x, y);
        this.z = z;
    }
    return PointEx;
})(Point);
