import "reflect-metadata";

// 方法装饰器要比类装饰器先执行

function showData(target: typeof User) {
    for (let key in target.prototype) {
        const data = Reflect.getMetadata('data', target.prototype, key)
        console.log(data);

    }
}

// 封装一个加入元数据的方法
function setMetadata(metadataKey: string, metadataValue: string) {
    return function (target: User, key: string) {
        Reflect.defineMetadata(metadataKey, metadataValue, target, key)
    }
}

@showData
class User {
    @setMetadata('data', 'name')
    getName() { }
    @setMetadata('data', 'age')
    getAge() { }
}

