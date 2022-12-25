//1.给函数添加返回值类型

// function getAddNumber(first:number,second:number){
//     return first+second +''
// }
// const sum = getAddNumber(1,2)

function getAddNumber(first:number,second:number):number{
    return first+second
}
const sum = getAddNumber(1,3)
console.log(sum);
// 2.解构赋值定义类型

function getTotal({one,two}:{one:number,two:number}):number {
    return one+two
}
const total = getTotal({one:1,two:2})
console.log(total);

export default void 0
