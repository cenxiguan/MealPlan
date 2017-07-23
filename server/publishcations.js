Meteor.publish('meal',function(){
  return Meal.find();
})

Meteor.publish('user',function(){
  return User.find();
})
