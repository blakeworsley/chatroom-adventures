const assert = require('assert');

describe('webpage interaction', function() {
  it('should have a title', function() {
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Chatroom Adventures');
  });
});

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('chatroom adventures app', function () {
  it('should have an input field', function () {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('hello there');

    assert.equal(messageInput.getValue(), 'hello there');
  });

  it('should disable button when input is empty', function() {
   browser.url('/');
   var messageInput = browser.element('.message-input-js');
   messageInput.setValue('');
   var buttonStatus = browser.isEnabled('.send-button-js');
   assert.equal(buttonStatus, false);
  });

  it('should be able to add messages to the page', function () {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('hello there');
    browser.click('.send-button-js');

    var messageList = browser.getText('article');
    assert.equal(messageList.replace(/\n/g, ", "), 'hello there');
    });
});
