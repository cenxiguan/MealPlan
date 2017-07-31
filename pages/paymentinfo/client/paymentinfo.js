Template.paymentinfo.onCreated(function() {
   Meteor.subscribe('payment');
});

Template.paymentinfo.helpers({
  "user": function(){
    return User.findOne({owner: Meteor.userId()});
  },

  "hasPayment": function(){
    return Payment.findOne({owner: Meteor.userId()});
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
    Router.go('ordered');
  }
})

Template.cardrow.events({
  'click span'(elt, instance) {
    Meteor.call('payment.remove',this.card);
  }
})
