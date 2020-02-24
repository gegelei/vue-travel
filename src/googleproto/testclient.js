var pb = require('./person_pb')
var person = new pb.Person()
person.setId(1)
person.setName('陈海洋')
person.setEmail('1559843332@qq.com')

console.log(person)

var bytes = person.serializeBinary()

console.log(pb.Person.deserializeBinary(bytes))
//[8, 1, 18, 3, 99, 104, 121] 后端返回的byte数组
console.log(pb.Person.deserializeBinary([8, 1, 18, 3, 99, 104, 121]))
