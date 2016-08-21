const assert = require('chai').assert;
// const $ = require('../../jquery');
const Messages = require('../../lib/messages');
const Message = require('../../lib/message');
const clearInputField = require('../../lib/chatroom');

describe('the chatroom', function () {
  it.skip('should clearInputField', function () {
    var messageInput = Document.getElementsByClassName('message-input-js');
    messageInput.val('Starched peanut');
    clearInputField();
    assert.equal(messageInput.val(''), true);
  });

  it.skip('should enableSendButton', function() {

  });
});
