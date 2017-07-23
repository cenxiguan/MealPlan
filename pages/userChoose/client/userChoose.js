Template.userChoose.onCreated(function() {
   Meteor.subscribe('user');
});

Template.userChoose.helpers({
  "hasProfile": function(){
    return User.findOne({owner: Meteor.userId()});
  }
})

Template.addprofile.events({
  'click button#submit'(elt,instance) {
    const firstname = instance.$('#firstname').val();
    const lastname = instance.$('#lastname').val();
    const vegetarian = instance.$("#vegetarian").is(":checked");
    const birthdate = instance.$('#birthdate').val();
    //const mealday = parseInt(day);
    const bmi = instance.$('input[name="bmi"]:checked').val();
    const foodstyle = instance.$('#foodstyle').val();
    const allergy = instance.$('#allergy').val();
    const otherinfo = instance.$('otherinfo').val();
    
    user = User.find({owner:Meteor.userId()}).fetch();

    var user = {firstname: firstname,
                lastname: lastname,
                vegetarian: vegetarian,
                birthdate: birthdate,
                bmi: bmi,
                foodstyle: foodstyle,
                allergy: allergy,
                otherinfo: otherinfo,
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
