// 抽象类
// 抽象类不能new，只能被继承,里面的东西可以写具体内容，也可以写壳子,但继承抽象类的类，必须将壳子填充，否则报错
abstract class Gemo {
    getType(){
        return 'Gemo'
    }
    height:number = 1
    abstract getArea():number // 壳子
}


class Circle extends Gemo{
    getArea(){
        return 123
    } 
} 

class Square extends Gemo{
    getArea(){
        return 456
    } 
}

// interface也可以像抽象类一样，封装通用的东西
interface Person {
    name:string
}

interface Teacher extends Person {
    age:number
}

interface Cooker extends Person {
    age:number
}

const getInfo = (user:Person)=>{
    console.log(user.name);
}

const teacher = {
    name:'dell',
    age:18
}

const cooker = {
    name:'dachu',
    age:18
}

getInfo(teacher)
getInfo(cooker)
export default void 0
