Meteor.publish('user',function(){
  return User.find();
})
