const $ = require('../jquery');
var $messageList = $('.message-list-js');

var Messages = {
  allMessages: [],

  addToArray: function(userInput) {
    this.allMessages.push(new Message(userInput));
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
    for (var i = 0; i < storedMessages.length; i++) {
      this.render(storedMessages[i].text);
    }
  },

  render: function(messageOutput) {
    $messageList.append(`
      <article class="message-js">
        <p class="user-message" contenteditable="true">` + messageOutput + `</p>
        <button class="delete-button-js"></button>
      </article>
      `);
  },

  renderRobot: function() {
    $messageList.append(`
      <article class="robot-message-js">
        <p>robot comment</p>
      </article>
    `);
  },

  deleteFromStorage: function() {

  }
};

module.exports = Messages;
