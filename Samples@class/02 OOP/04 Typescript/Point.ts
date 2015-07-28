export class Point {
    constructor(x, y) {
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
}

class PointEx extends Point {
    constructor(x, y, z) {
        super(x, y);

        this.z = z;
    }
}

