// require('./styles');


var $messageInput = $('.message-input-js');
var $sendButton = $('.send-button-js');
var $messageList = $('.message-list-js');

$sendButton.on('click', function() {
  var messageOutput = $messageInput.val();
  $messageList.append(
    `<article class="message-js">
      <p>` + messageOutput + `</p>
     </article>`
  );
});

// Constructor for a new message
// function Message () {
//   this.text = text;
//   this.id = id || Date.now();
// }
