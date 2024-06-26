// const greeting:string = 'hello from typescript'
// console.log(greeting);
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangle.prototype.perymetr = function () {
        return (this.a + this.b) * 2;
    };
    Rectangle.prototype.area = function () {
        return (this.a * this.b);
    };
    Rectangle.prototype.greeting = function () {
        console.log('Hello');
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangle.prototype.perymetr = function () {
        return (this.a + this.b + this.b);
    };
    Triangle.prototype.area = function () {
        return (this.a * this.b) / 2 * this.c;
    };
    return Triangle;
}());
var rectangle = new Rectangle(25, 7);
var shapes = [
    new Triangle(1, 2, 3),
    rectangle,
    new Triangle(5, 6, 7)
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.perymetr());
    console.log(shape.area());
}
rectangle.greeting();
var user = { name: 'Max', age: 23, status: true, data: ['asd', 'qwe'] };
var user2 = { status: false, data: [1, 2, 3] };
var User = /** @class */ (function () {
    function User(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    return User;
}());
var uzer = new User('Max', 25, false);
console.log(uzer.getName());
