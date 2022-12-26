// 类的装饰器（在类创建好后就执行）
// 装饰器本身就是一个函数
// 装饰器接收的参数是constructor构造函数
// 装饰器通过@使用


// 简单装饰器
// function testDecorator (flag:boolean) { // 工厂模式
//     if(flag) {
//         return function  (constructor:any) {
//             constructor.prototype.getName = ()=>{
//                 console.log(123);
//             }
//         }
//     }else {
//         return function  (constructor:any) {}
//     }

// }


// @testDecorator(false)
// class Test {}

// const test = new Test()
// const test1 = test as any
// test1.getName()


// 严格装饰器
function testDecorator() { // 工厂模式
    return function <T extends new (...args: any[]) => {}>(constructor: T) {
        return class extends constructor {
            name = 'lee'
            getName() {
                return this.name
            }
        }
    }

}

// 对于在原来的类上新增的东西，可以通过工厂模式，先修饰这个类，然后再命名，这样类上会有新增的东西，且也会有代码提示
const Test = testDecorator()( // 给返回的修饰器传入参数
    class {
        name: string
        constructor(name: string) {
            this.name = name
        }
    }
)


const test = new Test('dell')
console.log(test.getName());
