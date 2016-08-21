const assert = require('chai').assert;
// const $ = require('../../jquery');
const Messages = require('../../lib/messages');
const Message = require('../../lib/message');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('the message list', function () {
  it('should be an object', function () {
    var messages = Messages;
    assert.isObject(messages);
  });
});

describe('a message', function() {
  it('should be an object', function() {
    var message = new Message();
    assert.isObject(message);
  });

  it.skip('can increase the amountOfMessagesToShow ', function() {
    var messages = Messages;
    var amountOfMessagesShown = 10;
    Messages.amountOfMessagesToShow();
    // assert.equal(Messages.amountOfMessagesShown, 20;)
  });

  it.skip('can findLast10Messages', function() {
    var messages = Messages;
    var allMessages = [];
    Messages.allMessages.length = 20;
    Messages.findLast10Messages();
    assert.equal
  });

  it.skip('can be ', function() {

  });

  it.skip('can be ', function() {

  });

  it.skip('can be ', function() {

  });

  it.skip('can be ', function() {

  });

  it.skip('can be ', function() {

  });

  it.skip('can be ', function() {

  });

  it.skip('can be ', function() {

  });

  it.skip('can be ', function() {

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
