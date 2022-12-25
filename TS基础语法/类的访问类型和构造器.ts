/* 访问类型：
    public：类的内外都可以使用,
    private：只允许在类内被使用,
    protected：允许在类内和继承的子类中使用，类中默认是public*/
class Person {
    name:string = 'hhh'
    private age:number = 18
    public sayHi() {
        return 'hello'
    }
    public sayAge(){
        return this.age
    }
}

const person = new Person()
person.name = 'hhh!!!'
console.log(person.name);
console.log(person.sayAge());
console.log(person.sayHi());


// constructor

class Person1 {
    // 传统写法
    name='Jack'
    constructor(name:string){
        this.name=name
    }

    // 简化写法
    // constructor(public name:string){}
}

/*  继承,子类中要想有构造器，构造器中必要要有super将父类构造器也调用一下，且要传入父类中的参数
    即使，父类是空类，子类也要调用super
*/

class Teacher extends Person1 {
    constructor(){
        super('Jack')
    }
}


export default void 0