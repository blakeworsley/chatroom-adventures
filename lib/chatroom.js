const $ = require('../jquery');
const Messages = require('./messages');

var $messageInput = $('.message-input-js');
var $sendButton = $('.send-button-js');
var $messageList = $('.message-list-js');

$(document).ready(function() {
  Messages.getStored();
//  append your array to page
  Messages.appendStored();
});

$sendButton.on('click', function() {
  var messageOutput = $messageInput.val();
  var robotOutput = 'robot comment';
  Messages.addToArray('user', messageOutput);
  Messages.addToArray('robot', robotOutput);
  clearInputField();
  Messages.appendStored();
  enableSendButton();
});

$messageList.on('click', '.delete-button-js', function() {
  var idToBeDeleted = $(this).closest('article').attr('id');
  Messages.getStored();
  Messages.deleteFromStorage(idToBeDeleted);
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

$messageList.on('focusout', '.message-js', function() {
  var id = $(this).closest('article').attr('id');
  var newMessage = $(this).text();
  Messages.editMessage(id, newMessage);
});
