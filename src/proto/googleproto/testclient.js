var pb = require('./person_pb')
var person = new pb.Person()
person.setId(1)
person.setName('陈海洋')
person.setEmail('1559843332@qq.com')

console.log(person)

console.log("************************")

var bytes = person.serializeBinary()

console.log(pb.Person.deserializeBinary(bytes))

console.log("************************")
//[8, 1, 18, 3, 99, 104, 121] 后端返回的byte数组
console.log(pb.Person.deserializeBinary([8, 1, 18, 9, 233, 153, 136, 230, 181, 183, 230, 180, 139, 26, 17, 49, 53, 53, 57, 56, 52, 51, 51, 51, 50, 64, 113, 113, 46, 99, 111, 109]))
