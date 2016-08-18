const assert = require('assert');

describe('webpage interaction', function() {
  it('should have a title', function() {
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Chatroom Adventures');
  });
});

describe('our test bundle', function() {
  it('should work', function() {
    assert(true);
  });
});

describe('chatroom adventures app', function() {
  it('should have an input field', function() {
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

  it('should be able to add messages to the page', function() {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('hello there');
    browser.click('.send-button-js');

    var messageList = browser.getText('article');
    assert.equal(messageList[0], 'hello there');
  });

  it('should clear the input field when sent', function() {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('hello there');
    browser.click('.send-button-js');

    assert.equal(messageInput.getValue(), '');
  });


  it('should display chat messages in reverse chronological order', function() {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('first comment');
    browser.click('.send-button-js');
    messageInput.setValue('second comment');
    browser.click('.send-button-js');

    var messageList = browser.getText('article');

    assert.equal(messageList[0], 'first comment');
    assert.equal(messageList[2], 'second comment');
  });

  it('should have create a new message from a robot after every sent message', function() {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('human comment');
    browser.click('.send-button-js');

    var messageList = browser.getText('article');
    assert.equal(messageList[0], 'human comment');
    assert.equal(messageList[1], 'robot comment');
  });
  it('should have a delete button on each new message', function () {
    browser.url('/');

    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('human comment');
    browser.click('.send-button-js');
    var deleteButton = browser.element('.delete-button-js');

    assert.equal(deleteButton.isExisting(), true);

  });
  it('should delete message from dom when delete button is clicked', function () {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('human comment');
    browser.click('.send-button-js');
    browser.click('.delete-button-js');
    var humanMessage = browser.element('.message-js');
    assert.equal(humanMessage.isExisting(), false);
  });
  it.skip('should not be able to delete other users messages', function() {
    browser.url('/');
  });
});
