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

  it('should have an enabled send button when the input has a value', function() {
    browser.url('/');  
    var messageInput = browser.element('.message-input-js');  

    messageInput.setValue('a');  

    var buttonStatus = browser.isEnabled('.send-button-js');
    assert.equal(buttonStatus, true);
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
    var arrayLength = messageList.length - 4;
    var arrayLength2 = messageList.length - 2;

    assert.equal(messageList[arrayLength], 'first comment');
    assert.equal(messageList[arrayLength2], 'second comment');
  });

  it('should create a new message from a robot after every sent message', function() {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('human comment');
    browser.click('.send-button-js');

    var messageList = browser.getText('article');
    var arrayLength = messageList.length - 2;
    var arrayLength2 = messageList.length - 1;

    assert.equal(messageList[arrayLength], 'human comment');
    assert.equal(messageList[arrayLength2], 'robot comment');
  });

  it('should have a delete button on each new message', function() {
    browser.url('/');

    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('human comment');
    browser.click('.send-button-js');
    var deleteButton = browser.element('.delete-button-js');

    assert.equal(deleteButton.isExisting(), true);

  });

  it('should delete message from dom when delete button is clicked', function() {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('human comment');
    browser.click('.send-button-js');
    var messageList1 = browser.getText('article');
    var arrayLength1 = messageList1.length;
    browser.click('.delete-button-js');
    var messageList2 = browser.getText('article');
    var arrayLength2 = messageList2.length;
    assert.notEqual(arrayLength1, arrayLength2, true);
  });

  it('should have unique styles for each user', function() {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('first comment');
    browser.click('.send-button-js');

    var userMessage = browser.getCssProperty('.message-js', 'background-color');
    var robotMessage = browser.getCssProperty('.robot-message-js', 'background-color');
    assert.notEqual(userMessage, robotMessage, true);
  });

  it('should allow each user to edit their own message', function() {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('first comment');
    browser.click('.send-button-js');
    browser.click('.user-message');
    var newMessageInput = browser.element('.user-message');
    newMessageInput.setValue('new comment');

    assert.equal(newMessageInput.getText(), 'new comment');
  });

  it('should modify the count figure on keyup', function() {
    browser.url('/');
    var messageInput = browser.element('.message-input-js');

    messageInput.setValue('yes');

    var characterCount = browser.getText('.char-count-js');
    assert.equal(characterCount, '3');
  });
});
