const $ = require('../jquery');
const Message = require('./message');
var $messageList = $('.message-list-js');

var Messages = {
  allMessages: [],
  last10Messages: [],

  findLast10Messages: function() {
    this.getStored();
    debugger;
    var allMessagesLength = this.allMessages.length;
    if (allMessagesLength < 10) {
    this.last10Messages = this.allMessages.slice(0, allMessagesLength);
    }
    else {
      var allMessagesLength = this.allMessages.length;
      this.last10Messages = this.allMessages.slice(allMessagesLength - 10, allMessagesLength);
    }
  },

  addToArray: function(user, userInput) {
    this.allMessages.push(new Message(user, userInput));
    this.store();
  },

  store: function() {
    localStorage.setItem('storedMessages', JSON.stringify(this.allMessages));
  },

  getStored: function() {
    var storedMessages = JSON.parse(localStorage.getItem('storedMessages'));
    if (storedMessages) {
      this.allMessages = storedMessages;
    }
  },

  findMessageId: function(id) {
    id = parseInt(id, 10);
    return this.allMessages.find(function(message) {
      return message.id === id;
    });
  },

  appendStored: function() {
    this.clearList();
    this.findLast10Messages();
    for (var i = 0; i < this.last10Messages.length; i++) {
      this.render(this.last10Messages[i]);
    }
  },

  clearList: function() {
    $messageList.html('');
  },

  render: function(messageObject) {
    if (messageObject.user === 'user') {
      $messageList.append(`
        <article class="message-js" id="${messageObject.id}">
          <p class="user-message" contenteditable="true">${messageObject.text}</p>
          <button class="delete-button-js"></button>
        </article>
        `);
    } else {
      $messageList.append(`
        <article class="robot-message-js" id="${messageObject.id}">
          <p>${messageObject.text}</p>
        </article>
      `);
    }
  },

  deleteFromStorage: function(idToBeDeleted) {
    var id = parseInt(idToBeDeleted);
    for (var i = 0; i < this.allMessages.length; i++) {
      if(this.allMessages[i].id === id) {
        this.allMessages.splice(i, 1);
      }
    }
    this.store();
  },

  editMessage: function(id, newMessage) {
    id = parseInt(id, 10);
    var message = this.findMessageId(id);
    message.text = newMessage;
    this.store();
  },

  updateCharacterCount: function(messageInput) {
    var charCount = messageInput.val();
    $('.char-count-js').text(charCount.length);
  }
};

module.exports = Messages;
