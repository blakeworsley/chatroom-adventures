function Message(userType, text, id) {
  this.userType = userType;
  this.text = text;
  this.id = id || Date.now();
}

Message.prototype.render = function() {
  // const classNames = `message ${this.userType === 'robot' ? "robot" : "human"}`;
  return `
    <article class="message-${this.userType}">
      <p class="user-message" contenteditable="true">${this.text}</p>
      <button class="delete-button-js"></button>
    </article>
  `
};

module.exports = Message;
