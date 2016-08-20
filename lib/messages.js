const $ = require('../jquery');
const Message = require('./message');
var $messageList = $('.message-list-js');

var Messages = {
  allMessages: [],

  init: function() {
    this.allMessages = this.getStored();
    this.render();
  },

  add: function(userType, text) {
    this.allMessages.push(new Message(userType, text));
    this.store();
    this.render();
    if (userType === 'human') {
      var robotOutput = 'robot comment';
      this.add('robot', robotOutput);
    }
  },

  store: function() {
    localStorage.setItem('storedMessages', JSON.stringify(this.allMessages));
  },

  getStored: function() {
    // var messagesFromStorage = localStorage.getItem('allMessages') || '[]';
    // var messagesAsObjects = JSON.parse(messagesFromStorage);
    var messagesFromStorage = JSON.parse(localStorage.getItem('storedMessages')) || [];
    var asMessages = messagesFromStorage.map(function(message) {
      return new Message(message.userType, message.text, message.id);
    });
    return asMessages;
  },

  // appendStored: function() {
  //   var storedMessages = this.getStored();
  //   this.clearList();
  //   for (var i = 0; i < storedMessages.length; i++) {
  //     this.render(storedMessages[i].text);
  //   }
  // },
  //
  // clearList: function() {
  //   $messageList.html('');
  // },

  render: function() {
    //1 getting all the messages
    //2 build the messages markup
    //3 set the html

    // var finalMarkup = '';
    // this.allMessages.map(function(message) {
    //   finalMarkup = finalMarkup + message.render();
    // });

    var messagesMarkup = this.allMessages.reduce(function(finalMarkup, message) {
      return finalMarkup + message.render();
    }, '');


    $messageList.html(messagesMarkup);
    // const classNames = `message ${isRobot ? "robot" : "human"}`;
    // $messageList.append(`
    //   <article class="${classNames}">
    //     <p class="user-message" contenteditable="true">${messageOutput}</p>
    //     <button class="delete-button-js"></button>
    //   </article>
    // `);
  },

  // renderRobot: function(robotOutput) {
  //   $messageList.append(`
  //     <article class="robot-message-js">
  //       <p>` + robotOutput + `</p>
  //     </article>
  //   `);
  // },

  // deleteFromStorage: function(id) {
  //   this.allMessages = this.allMessages.filter(function(message) {
  //     return message.id !== id;}
  //     this.store;
  //   })

  // findMessage: function() {}

  // editMessage: function() {}
};

module.exports = Messages;
