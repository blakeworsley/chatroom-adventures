require('./styles');
var $ = require('../jquery');

//var $user = $('.user');
var $messageInput = $('.message-input-js');
var $sendButton = $('.send-button-js');
var $messageList = $('.message-list-js');

$sendButton.on('click', function() {
  var messageOutput = $messageInput.val();
  Messages.render(messageOutput);
  clearInputField();
  Messages.renderRobot();
  enableSendButton();
});

$messageList.on('click', '.delete-button-js', function() {
  $(this).parent().remove();
});

function clearInputField() {
  $messageInput.val('');
}

$messageInput.on('keyup', function() {
  enableSendButton();
});

function enableSendButton() {
  var messageInputEmpty = !$messageInput.val();
  $sendButton.prop('disabled', messageInputEmpty);
}


function Message(text, id) {
  // this.user = user;
  this.text = text;
  this.id = id || Date.now();
}

var Messages = {
  allMessages: [],

  // add: function(text) {
  //   this.allMessages.unshift(new Message(text));
  //   this.store();
  // },
  //
  // store: function() {
  //   localStorage.setItem('allMessage', JSON.stringify(this.allMessages));
  // },

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
};

module.exports = Messages;
module.exports = Message;
