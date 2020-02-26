var protobuf = require('protobufjs')

protobuf.load("./person.proto",function (err,root) {
  if (err)
    throw err;

  // Obtain a message type
  var AwesomeMessage = root.lookupType("Person");

  // Exemplary payload
  var payload = { name: "dahai", id: 18 };

  // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
  var errMsg = AwesomeMessage.verify(payload);
  if (errMsg)
    throw Error(errMsg);

  // Create a new message
  var message = AwesomeMessage.create(payload); // or use .fromObject if conversion is necessary

  // Encode a message to an Uint8Array (browser) or Buffer (node)
  var buffer = AwesomeMessage.encode(message).finish();

  console.log(buffer)
  // ... do something with buffer

  // Decode an Uint8Array (browser) or Buffer (node) to a message
  var message = AwesomeMessage.decode(buffer);
  console.log(message)
  // ... do something with message
})




