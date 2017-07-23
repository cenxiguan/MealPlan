Meteor.methods({
  'user.insert'(user) {
    User.insert(user);
  },

  'user.remove'(user) {
    if (this.userId == user.owner) {
      User.remove(user._id);
    }
  },

});
