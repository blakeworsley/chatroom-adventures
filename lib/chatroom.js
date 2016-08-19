const $ = require('../jquery');

const Messages = require('./messages');

var $messageInput = $('.message-input-js');
var $sendButton = $('.send-button-js');
var $messageList = $('.message-list-js');

$(document).ready(function() {
  Messages.appendStored();
});

$sendButton.on('click', function() {
  var messageOutput = $messageInput.val();
  Messages.addToArray(messageOutput);
  
  Messages.appendStored();
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
