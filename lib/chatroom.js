const $ = require('../jquery');
const Messages = require('./messages');

var $messageInput = $('.message-input-js');
var $sendButton = $('.send-button-js');
var $messageList = $('.message-list-js');
var $showMoreLink = $('.more-messages-js');

$(document).ready(function() {
  Messages.getStored();
  Messages.renderStored();
  updateChatroom();
});

$showMoreLink.hide();

$showMoreLink.on('click', function() {
  Messages.amountOfMessagesToShow();
  Messages.renderStored();
  scrollToBottom();
});

$sendButton.on('click', function() {
  var messageOutput = $messageInput.val();
  var robotOutput = 'robot comment';
  Messages.renderMessageToPage('user', messageOutput);
  Messages.renderMessageToPage('robot', robotOutput);
  updateChatroom();
});


function updateChatroom() {
  clearInputField();
  showMoreMessagesButton();
  enableSendButton();
  resetCharacterCount();
  scrollToBottom();
}

function showMoreMessagesButton() {
    if (Messages.allMessages.length > 10) {
      $('.more-messages-js').show();
    }
}

function resetCharacterCount() {
  $('.char-count-js').text(0);
}

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
