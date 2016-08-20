const $ = require('../jquery');
const Message = require('./message');
var $messageList = $('.message-list-js');

var Messages = {
  allMessages: [],

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
    for (var i = 0; i < this.allMessages.length; i++) {
      this.render(this.allMessages[i]);
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
};

module.exports = Messages;
