interface Item {
    name:string
}
// 泛型继承interface
class DataManager<T extends Item>{
    constructor(private data:T[]) {}
    getItem(index:number):string {
        return this.data[index].name
    }
}

const data = new DataManager([
    {
        name:'111'
    }
])

// 限制泛型的类型

class DataManagerA<T extends number | string> {
    constructor(private data:T[]){}
    getItem(index:number):T {
        return this.data[index]
    }
}

const dataA = new DataManagerA(['1',2])
dataA.getItem(0)


// 使用泛型声明一些类型，即，使用泛型做一些类型注解
function hello<T>(param:T):T {
    return param
}
// 如，定义函数的类型
const func:<T>(param:T)=>T = hello