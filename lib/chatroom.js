const $ = require('../jquery');
const Messages = require('./messages');

var $messageInput = $('.message-input-js');
var $sendButton = $('.send-button-js');
var $messageList = $('.message-list-js');
var $characterCount = $('.char-count-js');
var $showMoreLink = $('.more-messages-js');

$(document).ready(function() {
  Messages.getStored();
  Messages.appendStored();
  Messages.showLink();
  scrollToBottom();
});

$showMoreLink.hide();

$showMoreLink.on('click', function() {
  Messages.amountOfMessagesToShow();
  Messages.appendStored();
  scrollToBottom();
});

$sendButton.on('click', function() {
  var messageOutput = $messageInput.val();
  var robotOutput = 'robot comment';
  Messages.addToArray('user', messageOutput);
  Messages.addToArray('robot', robotOutput);
  clearInputField();
  Messages.appendStored();
  Messages.showLink();
  enableSendButton();
  $characterCount.text(0);
  scrollToBottom();
});

$messageList.on('click', '.delete-button-js', function() {
  var idToBeDeleted = $(this).closest('article').attr('id');
  Messages.getStored();
  Messages.deleteFromStorage(idToBeDeleted);
  $(this).parent().remove();
});

$messageInput.on('keyup', function() {
  enableSendButton();
  Messages.updateCharacterCount($messageInput);
});

$messageList.on('focusout', '.user-message', function() {
  var id = $(this).closest('article').attr('id');
  var newMessage = $(this).text();
  Messages.editMessage(id, newMessage);
});

function clearInputField () {
  $messageInput.val('');
}

function enableSendButton () {
  var messageInputEmpty = !$messageInput.val();
  $sendButton.prop('disabled', messageInputEmpty);
}

function scrollToBottom() {
  window.scrollTo(0,document.body.scrollHeight);
}

module.exports = clearInputField;
