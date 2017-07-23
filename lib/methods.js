Meteor.methods({
  'userChoose.insert'(userChoose) {
    Meal.insert(userChoose);
  },

  'userChoose.remove'(userChoose) {
    if (this.userId == userChoose.owner) {
      Meal.remove(userChoose._id);
    } else {
      throw new Meteor.Error(100, "Why are you deleting someone else's entry?");
    }
  },

  'user.insert'(user) {
    User.insert(user);
  },

  'user.remove'(user) {
    if (this.userId == user.owner) {
      User.remove(user._id);
    }
  },

  'updateday'(meal,day){
  Meal.update(meal._id,{$set:{day:day}});
}

});
