Template.userChoose.onCreated(function() {
   Meteor.subscribe('user');
});

Template.userChoose.helpers({
  "hasProfile": function(){
    return User.findOne({owner: Meteor.userId()});
  }
})

Template.addprofile.events({
  'click button'(elt,instance) {
    const firstname = instance.$('#firstname').val();
    const lastname = instance.$('#lastname').val();
    const day = instance.$('#day').val();
    //const mealday = parseInt(day);
    console.log('adding '+name);
    instance.$('#name').val("");
    instance.$('#day').val("");

    var user = {name,day,
                owner:Meteor.userId(),
                createAt:new Date()};
    Meteor.call('user.insert',user,
      (err,res) => {
        console.log('got the answer');
        console.dir([err,res]);
        }
    );
  }
})

Template.showprofile.helpers({

})
