// 数组
let arr1:(string | number)[] = [1,'2',3]
let nullArr: null[] = [null]
let undefinedArr: undefined[] = [undefined]


// type 类型别名
type User = {name:string,age:number}
const student:User[] =[{name:'1',age:2}] 

// class===手写对象
class teacher1 {
    name:string;
    age:number;
}
const people:teacher1[] = [
    new teacher1(),
    {
        name:'hi',age:30
    }
]


// 元组:数组中元素的个数和类型确定
const Yarr:[string | number,string,number] = [1,'2',3]

// csv导出的数据结构,在TS里使用
const Yarr1:[string | number,string,number][] = [
    ['lee','male',18],
    [20,'male',20]
]

export default void 0