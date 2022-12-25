// 基础类型 number,string,null,undefined,boolean,void,symbol

const teacherName:string = 'dell'
let count:number = 123



// 对象类型：对象，数组，类，函数

// 对象
const teacher:{name:string,age:number} = {
    name:'lee',
    age:20
}

// 数组
const arr:number[] = [1,2]

// 类
class Person {}
const dell:Person = new Person()

//函数
const fun:()=>number = function(){
    return 123
}

export default void 0
