// type annotation 类型注解，我们来告诉ts，变量类型是什么
// type inference 类型推断，ts会自动的去尝试分析变量的类型
// 一般情况下我们使用类型推断,当ts无法分析时,需要使用类型注解.如,函数的参数

function fuc(first:number,second:number){
    return first+second
}
const count1 = fuc(1,2)

const obj = {
    name:'111',
    age:18
}

export default void 0