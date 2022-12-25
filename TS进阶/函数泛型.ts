// 泛型——泛指的类型 <A>,类型待定，使用的时候传入。
// 使用的时候如果不规定类型，TS会根据传入的参数的类型推断出泛型所指的类型

function join<T,P>(first:T,second:P) {
    return `${first}${second}`
}

function joinA<T>(first:T,second:T):T {
    return first
}

// 数组
function joinB<T>(first:T[]) {
    return first
}
// 等价于

// function joinB<T>(first:Array T) {
//     return first
// }

joinA<number>(1,1)
join<string,number>('1',2)
joinB<String>(['1'])