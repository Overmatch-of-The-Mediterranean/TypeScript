interface Bird {
    fly:boolean;
    sing:()=>{}
}
interface Dog {
    fly:boolean;
    bark:()=>{}
}
// 联合类型 xxx | xxx
// 类型保护：这里有四种
// 1.类型断言(使用as关键字)
function trainAnimal(animal:Bird | Dog) {
    if(animal.fly) {
        (animal as Bird).sing()
    }else {
        (animal as Dog).bark()
    }
}

// 2.使用in关键字
function animalA(animal:Bird | Dog) {
    if('sing' in animal) {
        animal.sing()
    }else {
        animal.bark()
    }
}


// 3.使用typeof
function add(first:string | number,second:string | number) {
    if(typeof first == 'string' || typeof second == 'string') {
        return `${first}${second}`
    }
    return first + second
}

// 4.使用instanceof语法
class NumberObj {
    count:number=2;
}
function addSecond(first:Object | NumberObj,second:Object | NumberObj) {
    if(first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
    return 0
}