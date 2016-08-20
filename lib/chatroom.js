const $ = require('../jquery');
const Messages = require('./messages');

var $messageInput = $('.message-input-js');
var $sendButton = $('.send-button-js');
var $messageList = $('.message-list-js');
var $charCount = $('.char-count');

//Retrieves data from localStorage
$(document).ready(function() {
  Messages.init();
});

//Send button functionality
$sendButton.on('click', function() {
  var messageText = $messageInput.val();
  Messages.add('human', messageText);
  clearInputField();
  enableSendButton();
});

//Delete button functionality
$messageList.on('click', '.delete-button-js', function() {
  $(this).parent().remove();
});

//Clears input field
function clearInputField() {
  $messageInput.val('');
}

// $messageList.on('click', '.delete-button-js', function() {
//   var id = $(this).parent().data('id');
// 	Messages.remove(id);
// 	Messages.render();
// })
// Character counter
// $messageInput.on('keyup', function() {
//   var counter = 0;
//   $charCount.length.append(counter.val());
// });

//Enables input field
$messageInput.on('keyup', function() {
  enableSendButton();
});

//Changes button disabled property
function enableSendButton() {
  var messageInputEmpty = !$messageInput.val();
  $sendButton.prop('disabled', messageInputEmpty);
}
