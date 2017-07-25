Meteor.publish('user',function(){
  return User.find();
});

Meteor.publish('payment',function(){
  return Payment.find();
})
