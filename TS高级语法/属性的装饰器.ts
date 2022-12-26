// 属性装饰器
// 属性装饰器只有target和key这两个参数，这两个参数功能和方法修饰器一样


function propDecorator(target: any, key: string): any {
    // 因为没有第三个descriptor参数，所以只能定义一个，然后替代掉原来的descriptor
    // const descriptor: PropertyDescriptor = {
    //     writable: false
    // }
    // return descriptor、

    // 添加在原型对象上
    target[key] = 'tom'
}

// 添加到实例对象上
class Test {
    @propDecorator
    name: string = 'dell'
}

const test = new Test()
// const test1 = (test as any)
// test1.__proto__.name = 'dell lee'
console.log((test as any).__proto__.name);

export default void 0

