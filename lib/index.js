require('./styles');

//var $user = $('.user');
var $messageInput = $('.message-input-js');
var $sendButton = $('.send-button-js');
var $messageList = $('.message-list-js');

// Constructor for a new message
function Message (text, id) {
  // this.user = user;
  this.text = text;
  this.id = id || Date.now();
}

//Messages object
var Messages = {
  allMessages: [],

  add: function(text) {
    this.allMessages.unshift(new Message(text))
    this.store();
  },

  store: function() {
    localStorage.setItem('allMessage', JSON.stringify(this.allMessages));
  },
};

$sendButton.on('click', function() {
  var messageOutput = $messageInput.val();
  Messages.add(messageOutput);
  $messageList.append(
    `<article class="message-js">
      <p>` + messageOutput + `</p>
     </article>`
  );
  clearInputField();
});

function enableButton() {
  if ($messageInput.val() === "") {
    $sendButton.prop('disabled', true);
  }
  else {
    $sendButton.prop('disabled', false);
  }
};

function clearInputField() {
  $messageInput.val('');
}

$messageInput.on('keyup', function() {
  enableButton();
});
