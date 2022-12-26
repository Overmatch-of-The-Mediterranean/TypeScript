// 方法装饰器（在类创建完后执行）
// 对于普通方法，target是类的prototype
// 对于静态方法，target是类的构造函数
// key是修饰的方法的名字
// descriptor相当于Object.defineProperty(obj,prop,descriptor)的第三个参数，作用是做一些配置

function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.writable = true
    descriptor.value = function () {
        return 'mutelate'
    }
}


class Test {
    name: string
    constructor(name: string) {
        this.name = name
    }
    @getNameDecorator
    getName() {
        return '123'
    }
}

const test = new Test('dell')
// test.getName = function () {
//     return 'change'
// }
console.log(test.getName());

export default void 0
