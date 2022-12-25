// 枚举类型
// 默认从0开始递增，且可以反向映射
enum Status {
    OFFLINE,
    ONLINE,
    DELETED
}

console.log(Status.DELETED,Status[2]); // 正向反向


// const Status = {
//     OFFLINE:0,
//     ONLINE:1,
//     DELETED:2
// }

function getResult(status:any) {
    if(status == Status.OFFLINE) {
        return 'offline'
    }else if(status == Status.ONLINE) {
        return 'online'
    }else if(status == Status.DELETED) {
        return 'deleted'
    }else {
        return 'error'
    }
}
console.log(getResult(Status.OFFLINE));
