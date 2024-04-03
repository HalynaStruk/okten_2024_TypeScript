// const greeting:string = 'hello from typescript'
// console.log(greeting);

// const asd = (names:string[], ddd:number, hhh:boolean):number=>{
//     console.log(names, ddd, hhh);
//     return 6;
// }
// asd(['max', 'ivan', 'anna'],2,true)

// interface
// const user1:{name:string, age:number, status: boolean} = {name: 'max', age:15, status:false}
// // щоб кожен раз так не прописувати краще використати interface
// interface IUser<T>{
//     name:string,
//     age:number,
//     status: boolean,
//     data:T
//     // house?: number // ? означає, що це поле не є обовязковим
// }
// // const user: IUser = {name: 'max', age:15, status:false, house: 5}
// const user: IUser<string[]> = {name: 'max', age:15, status:false, data:['asd','qwe', 'zxc']}
// const user2: IUser<number[]> = {age:21, name: 'anna', status:true, data:[1, 2, 3, 4]}
// // const getName = (data:IUser):string => {
// //     return data.name;
// // }
// // console.log(getName(user));
// const user3: Partial<IUser<boolean>> = {status: true, data: false} // Partial означає, що можна не вказувати всі поля

// class
// class User{
//     name:string;
//     age:number;
//     status: boolean;
//
//     constructor(name:string, age:number, status: boolean,) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
// }

// але краще писати так class
// class User{
//     constructor(private name:string, public age:number, protected status: boolean,) {
//         // модифікатори:
//         // private цю змінну можна використовувати тільтки в межах класу
//         // public можна використовувати всюди
//         // protected можна використовувати всередині класу і всередині класу нащадка
// }
// const user4: User = {name: 'max', age:23, status:false}
// class User{
//     constructor(private _name:string, age:number, status: boolean) {
//
//     }
//     getName():string{
//         return this._name
//     }
//     setName(name:string):void{
//         this._name = name
//     }
// }
//
// const user = new User('ira', 16, true);
// user.setName('maria');
// console.log(user.getName());

// абстракція class
// abstract class Shape{
//     abstract perymetr(): number
//     abstract area(): number
// }
// class Rectangle extends Shape{
//     constructor(private a: number, private b: number ) {
//         super();
//     }
//     perymetr(): number {
//         return (this.a+this.b)*2;
//     }
//     area(): number {
//         return (this.a*this.b);
//     }
// }
// class Triangle extends Shape{
//     constructor(private a: number, private b: number, private c:number) {
//         super();
//     }
//     perymetr(): number {
//         return (this.a+this.b+this.b);
//     }
//     area(): number {
//         return (this.a*this.b)/2*this.c;
//     }
// }
//
// const shapes: Shape[] = [
//     new Triangle(1,2,3),
//     new Rectangle(25,7),
//     new Triangle(5,6,7)
// ]
// for (const shape of shapes) {
//     console.log(shape.perymetr());
//     console.log(shape.area());
// }

// краще це все описати за допомогою interface

interface ITools{
    area: () => number;
    perymetr: () => number
}
interface IGreeting {
    greeting: ()=> void
}
class Rectangle implements ITools, IGreeting{
    constructor(private a: number, private b: number ) {

    }
    perymetr(): number {
        return (this.a+this.b)*2;
    }
    area(): number {
        return (this.a*this.b);
    }
    greeting(): void{
        console.log('Hello');
    }
}
class Triangle implements ITools{
    constructor(private a: number, private b: number, private c:number) {

    }
    perymetr(): number {
        return (this.a+this.b+this.b);
    }
    area(): number {
        return (this.a*this.b)/2*this.c;
    }
}

let rectangle = new Rectangle(25,7);
const shapes: ITools[] = [
    new Triangle(1,2,3),
    rectangle,
    new Triangle(5,6,7)
]
for (const shape of shapes) {
    console.log(shape.perymetr());
    console.log(shape.area());
}
rectangle.greeting();
