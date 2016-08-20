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
    return JSON.parse(localStorage.getItem('storedMessages'));
  },

  appendStored: function() {
    var storedMessages = this.getStored();
    this.clearList();
    for (var i = 0; i < storedMessages.length; i++) {
      this.render(storedMessages[i]);
    }
  },

  clearList: function() {
    $messageList.html('');
  },

  render: function(messageObject) {
    if (messageObject.user === 'user') {
      $messageList.append(`
        <article class="message-js">
          <p class="user-message" contenteditable="true">${messageObject.text}</p>
          <button class="delete-button-js"></button>
        </article>
        `);
    } else {
      $messageList.append(`
        <article class="robot-message-js">
          <p>${messageObject.text}</p>
        </article>
      `);
    }
  },


  deleteFromStorage: function() {

  }
};

module.exports = Messages;
