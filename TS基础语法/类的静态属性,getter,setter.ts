// getter和setter可以用来对信息进行处理，如，加密。且用get的方法，可以用属性的方式调用

class Person {
    constructor(private _name:string){}
    get name(){
        return this._name + ' lee'
    }
    set name(name:string) {
        const realName = name.split(' ')[0]
        this._name = realName
    }
}

const person = new Person('dell')
console.log(person.name);
person.name = 'dell lee'
console.log(person.name);

// 单例模式，一个class只能生成一个实例
class Demo {
    private static instance:Demo
    private constructor(public name:string){}
    // static将方法直接放在类上，而不是类的实例上
    static getInstance() {
        if(!this.instance) {
            this.instance = new Demo('lee')
        } 
        // console.log('===>',this);
        
        return this.instance
    }
}

const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()
console.log(demo1);
console.log(demo1.name);

console.log(demo1 === demo2 );


export default void 0