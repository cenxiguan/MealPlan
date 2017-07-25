Template.userChoose.onCreated(function() {
   Meteor.subscribe('user');
   Meteor.subscribe('payment');
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
  },

  "hasPayment": function(){
    return Payment.findOne({owner: Meteor.userId()});
  }
});

Template.showprofile.events({
  'click button#edit'(elt, instance) {
    instance.$(".showprofilediv").css("display", "none");
    //instance.$(".payment").css("display", "none");
    instance.$(".editinfo").css("display", "block");
  },

  'click button#save'(elt, instance) {
    const editfirstname = instance.$('.editfirstname').val();
    const editlastname = instance.$('.editlastname').val();
    const editvegetarian = instance.$(".editvegetarian").is(":checked");
    const editbirthdate = instance.$('.editbirthdate').val();
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
    Meteor.call('user.update',Meteor.userId(), user);

    instance.$(".editinfo").css("display", "none");
    instance.$(".showprofilediv").css("display", "block");
    //instance.$(".payment").css("display", "none");
  }
});

Template.addpayment.events({
  'click button#save'(elt,instance) {
    const name = instance.$('#nameoncard').val();
    const cardnumb = instance.$('#creditcard').val();
    const expMonth = instance.$('#month').val();
    const expYear = instance.$("#year").val();
    const security = instance.$('#securitycode').val();
    const zipcode = instance.$('#zipcode').val();
    const phone = instance.$('#phonenumber').val();

    var payment = {
                name: name,
                cardnumb: cardnumb,
                expMonth: expMonth,
                expYear: expYear,
                security: security,
                zipcode: zipcode,
                phone: phone,
                owner: Meteor.userId()};
    Meteor.call('payment.insert',payment,
      (err,res) => {
        console.log('got the answer');
        console.dir([err,res]);
        }
    );
  }
})

Template.showpayment.helpers({
  "paymentlist": function(){
    return Payment.find({owner: Meteor.userId()});
  }
});

Template.showpayment.events({
  'click button'(elt, instance) {
    alert("Your meal plan will be sent to your email address within 24 hours.");
  }
})

Template.cardrow.events({
  'click span'(elt, instance) {
    Meteor.call('payment.remove',this.card);
  }
})
