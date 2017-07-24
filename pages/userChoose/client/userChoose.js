Template.userChoose.onCreated(function() {
   Meteor.subscribe('user');
});

Template.userChoose.helpers({
  "hasProfile": function(){
    return User.findOne({owner: Meteor.userId()});
  }
});

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
    const otherinfo = instance.$('#otherinfo').val();

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
});

Template.showprofile.helpers({
  "user": function(){
    return User.findOne({owner: Meteor.userId()});
  }
});

Template.showprofile.events({
  'click button#edit'(elt, instance) {
    console.log("clicked edit");
    instance.$(".showprofilediv").css("display", "none");
    console.log("no profile shown");
    instance.$(".editprofile").css("display", "block");
  },

  'click button#save'(elt, instance) {
    const editfirstname = instance.$('.editfirstname').val();
    const editlastname = instance.$('.editlastname').val();
    const editvegetarian = instance.$(".editvegetarian").is(":checked");
    const editbirthdate = instance.$('.editbirthdate').val();
    //const mealday = parseInt(day);
    const editbmi = instance.$('input[name="editbmi"]:checked').val();
    const editfoodstyle = instance.$('.editfoodstyle').val();
    const editallergy = instance.$('.editallergy').val();
    const editotherinfo = instance.$('.editotherinfo').val();

    var user = {firstname: editfirstname,
                lastname: editlastname,
                vegetarian: editvegetarian,
                birthdate: editbirthdate,
                bmi: editbmi,
                foodstyle: editfoodstyle,
                allergy: editallergy,
                otherinfo: editotherinfo,
                owner:Meteor.userId(),
                createAt:new Date()};
    Meteor.call('user.insert',user,
      (err,res) => {
        console.log('got the answer');
        console.dir([err,res]);
        }
    );

    instance.$(".editprofile").css("display", "none");
    instance.$(".showprofilediv").css("display", "block");
  }
});
