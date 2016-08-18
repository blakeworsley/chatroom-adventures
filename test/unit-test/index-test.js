const assert = require('chai').assert;
const Messages = require('../../lib/index');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('the message list', function () {
  it('should be an object', function () {
    var messageList = new Messages();
    assert.isObject(messageList);
  });
});

describe('a message', function() {
  it('should be an object', function() {
    var message = new Message();
    assert.isObject(message);
  });

  it('can be edittable', function() {

  });

  it('can be deleted', function() {

  });
});


// it('should save a new message to message list'), function() {
//   var message = new Message(user, text, id, classes)
//   var messageList = new MessageList
//   create the message
//   create message list
//   call function that adds message to list
//   assert that list has message
// }

// test that a message is constructed with the stuff
// message.saveMessage(message), my message is now in a message array
// create a messageList object that is constructed with an array
