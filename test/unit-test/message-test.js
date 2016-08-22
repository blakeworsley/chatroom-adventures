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

  it('should increase the amountOfMessagesToShow ', function() {
    var messages = Messages;
    var amountOfMessagesShown = 10;
    messages.amountOfMessagesToShow();
    assert.equal(messages.amountOfMessagesShown, 20);
  });

  it.skip('can findLast10Messages', function() {
    var messages = Messages;
    var allMessages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var last10Messages = [];
    messages.store();
    messages.findLast10Messages();
    assert.equal(messages.last10Messages.length, 10);
  });
});
