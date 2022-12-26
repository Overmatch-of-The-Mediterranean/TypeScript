// 访问器装饰器（在类创建完后执行）
// 访问器修饰器的三个参数和方法修饰器的三个参数一样
// get 和 set 不能同时用访问器，否则会报错


function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.writable = true
}

class Test {
    private _name: string
    constructor(name: string) {
        this._name = name
    }
    get name() {
        return this._name
    }

    @visitDecorator
    set name(name: string) {
        this._name = name
    }
}

const test = new Test('dell')
test.name = 'dell lee'
console.log(test.name);

export default void 0