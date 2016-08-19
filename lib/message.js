function Message(user, text, id) {
  this.user = user;
  this.text = text;
  this.id = id || Date.now();
}

module.exports = Message;
