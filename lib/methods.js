Meteor.methods({
  'user.insert'(user) {
    User.insert(user);
  },

  'user.remove'(user) {
    if (this.userId == user.owner) {
      User.remove(user._id);
    }
  },

  'user.update'(id, user) {
    User.update({owner:id}, user);
  },
});
