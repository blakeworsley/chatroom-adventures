require('./styles');

var $messageInput = $('.message-input-js');
var $sendButton = $('.send-button-js');
var $messageList = $('.message-list-js');

$sendButton.on('click', function(e) {
  // e.preventDefault(); // if we put the input in a form field
  var messageOutput = $messageInput.val();
  appendMessage(messageOutput);
  clearInputField();
  robotResponse('robot comment');
  enableSendButton();
});

function appendMessage(messageOutput) {
  $messageList.append(`
    <article class="message-js">
      <p>` + messageOutput + `</p>
      <button class="delete-button-js"></button>
    </article>
  `);
}

$messageList.on('click', '.delete-button-js', function () {
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

function robotResponse(response) {
  appendMessage(response);
}



// Constructor for a new message
// function Message () {
//   this.user = user;
//   this.text = text;
//   this.id = id || Date.now();
// }

//
