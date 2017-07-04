Meteor.methods({
  'userChoose.insert'(userChoose) {
    Meal.insert(userChoose);
  },

  'userChoose.remove'(userChoose) {
    if (this.userId == userChoose.owner) {
      Meal.remove(userChoose._id);
    } else {
      alert("Why are you deleting someone else's entry?");
    }
  },

});
