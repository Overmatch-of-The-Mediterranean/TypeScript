// interface与type相似，区别是interface不能定义基本类型

interface people {
    // readonly name:string // 只读
    name:string;
    age?:number; // ?表示可有可无
    [propName:string]:any;  // 为未来的其他参数做准备
    say():string // 函数返回值类型为string
}

interface teacher3 extends people {  // 接口继承
    teach():string
}

// 函数类型接口
interface sayHi{
    (word:string):string // 函数传入的参数和返回值都是string类型
}


const person = {
    name:'lee',
    sex:'male',
    say(){
        return 'say hello'
    },
    teach(){
        return 'teach'
    }

}

function reName(people:people,name:string){
    people.name = name
}

// 直接传字面量会进行严格的校准，通过变量传递，校验没那么严格，且可以在满足接口的基础上增加一些属性
reName(person,'lee');

// 类应用这个接口，需要有这个接口中的必须项，否则报错
class User1 implements people {
    name:'dell';
    say(){
        return 'hello'
    }
}

const say: sayHi = (word:string)=>{
    return word
}

export default void 0