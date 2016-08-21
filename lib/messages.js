const $ = require('../jquery');
const Message = require('./message');
var $messageList = $('.message-list-js');

var Messages = {
  allMessages: [],
  last10Messages: [],
  amountOfMessagesShown: 10,

  renderMessageToPage: function(user, messageOutput) {
    this.addToArray(user, messageOutput);
    this.renderStored();
  },

  findLast10Messages: function() {
    this.getStored();
    var allMessagesLength = this.allMessages.length;
    if (allMessagesLength < this.amountOfMessagesShown) {
      this.last10Messages = this.allMessages.slice(0, allMessagesLength);
    } else {
      allMessagesLength = this.allMessages.length;
      this.last10Messages = this.allMessages.slice(allMessagesLength - this.amountOfMessagesShown, allMessagesLength);
    }
  },

  amountOfMessagesToShow: function() {
    this.amountOfMessagesShown += 10;
    return this.amountOfMessagesShown;
  },

  addToArray: function(user, userInput) {
    this.allMessages.push(new Message(user, userInput));
    this.store();
  },

  store: function() {
    localStorage.setItem('storedMessages', JSON.stringify(this.allMessages));
  },

  getStored: function() {
    var storedMessages = JSON.parse(localStorage.getItem('storedMessages')) || [];
    this.allMessages = storedMessages;
  },

  findMessageId: function(id) {
    id = parseInt(id, 10);
    return this.allMessages.find(function(message) {
      return message.id === id;
    });
  },

  renderStored: function() {
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
        <article class="message-js ${messageObject.user}-message-container message-container" id="${messageObject.id}">
          <p class="${messageObject.user}-message" contenteditable="true">${messageObject.text}</p>
          <button class="delete-button-js" role='delete'></button>
        </article>
        `);
    } else {
      $messageList.append(`
        <article class="${messageObject.user}-message-js ${messageObject.user}-message-container message-container" id="${messageObject.id}">
          <p class="${messageObject.user}-message">${messageObject.text}</p>
        </article>
      `);
    }
  },

  deleteFromStorage: function(idToBeDeleted) {
    var id = parseInt(idToBeDeleted);
    for (var i = 0; i < this.allMessages.length; i++) {
      if (this.allMessages[i].id === id) {
        this.allMessages.splice(i, 1);
      };
    };
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
  },

};

module.exports = Messages;
