var personPb = require("./person_pb")
// Obtain a message type
var p = personPb.Person;

// Exemplary payload
var payload = { name: "陈海洋", id: 1,email:"1559843332@qq.com" };

// Verify the payload if necessary (i.e. when possibly incomplete or invalid)
var errMsg = p.verify(payload);
if (errMsg)
  throw Error(errMsg);

// Create a new message
var message = p.create(payload); // or use .fromObject if conversion is necessary
// Encode a message to an Uint8Array (browser) or Buffer (node)
var buffer = p.encode(message).finish();
console.log(buffer)
// ... do something with buffer

// Decode an Uint8Array (browser) or Buffer (node) to a message
var message = p.decode(buffer);
console.log(message)
// ... do something with message
