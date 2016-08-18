require('./styles');

//var $user = $('.user');
var $messageInput = $('.message-input-js');
var $sendButton = $('.send-button-js');
var $messageList = $('.message-list-js');

<<<<<<< HEAD
$sendButton.on('click', function(e) {
  // e.preventDefault(); // if we put the input in a form field
  var messageOutput = $messageInput.val();
  Messages.render(messageOutput);
  clearInputField();
  Messages.renderRobot();
  enableSendButton();
});


// $sendButton.on('click', function() {
//     var messageOutput = $messageInput.val();
//     Messages.add(messageOutput);
//     $messageList.append(
//       `<article class="message-js">
//         <p>` + messageOutput + `</p>
//        </article>`
//     );
//   >>>>>>> master
//
// =======
// Constructor for a new message
function Message (text, id) {
  // this.user = user;
  this.text = text;
  this.id = id || Date.now();
}

//Messages object
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

  delete: function() {
    $messageList.on('click', '.delete-button-js', function () {
      $(this).parent().remove();
    });
  },

  render: function(messageOutput) {
    $messageList.append(`
      <article class="message-js">
      <p>` + messageOutput + `</p>
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



// function appendMessage(messageOutput) {
//   $messageList.append(`
//     <article class="message-js">
//       <p>` + messageOutput + `</p>
//       <button class="delete-button-js"></button>
//     </article>
//   `);
// }

// function appendRobotMessage(messageOutput) {
//   $messageList.append(`
//     <article class="robot-message-js">
//       <p>` + messageOutput + `</p>
//     </article>
//   `);
// }

// function robotResponse(response) {
//   appendRobotMessage(response);
// }

// $messageList.on('click', '.delete-button-js', function () {
//   $(this).parent().remove();
// });

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
