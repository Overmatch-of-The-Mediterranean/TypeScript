// 参数装饰器
// 原型对象prototype，方法名，参数所在的位置

function paramDecorator(target: any, key: string, paramIndex: number) {
    console.log(target, key, paramIndex);
}

class Test {
    getInfo(@paramDecorator name: string, age: number) {
        console.log(name, age);

    }
}
const test = new Test()

test.getInfo('tom', 18)
export default void 0
