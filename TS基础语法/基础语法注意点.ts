// 基础类型
// 定义基础类型并赋值分两行写,则TS不能类型推断,需要类型注解
let count2:number;
count2=1


// 对象类型
// 这种形式,函数返回值可不加类型注解,TS能根据return后面的语句推断出类型
const func = function(str:string){
    return parseInt(str,10)
}

// 这种形式因为语法要求不能省去类型注解
const func1:(str:string)=>number = (str)=>{
    return parseInt(str,10)
}

// 例外,TS对有些内置函数不能推断出类型,如:
interface Person1 {
    name:string
}
const oldObj = '{"name":"lee"}'
const newObj:Person1 = JSON.parse(oldObj)

// 一个变量可以设置好几种类型
let a:number | string = 1
a='123'

export default void 0