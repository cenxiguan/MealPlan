Template.userChoose.onCreated(function() {
   Meteor.subscribe('meal');
});


Template.showMeal.helpers({
  meallist() {return Meal.find()},
})

Template.addMeal.events({
  'click button'(elt,instance) {
    const name = instance.$('#name').val();
    const day = instance.$('#day').val();
    //const mealday = parseInt(day);
    console.log('adding '+name);
    instance.$('#name').val("");
    instance.$('#day').val("");

    var userChoose = {name,day,
                owner:Meteor.userId(),
                createAt:new Date()};
    Meteor.call('userChoose.insert',userChoose,
      (err,res) => {
        console.log('got the answer');
        console.dir([err,res]);
        }
    );
  }
})

Template.mealrow.helpers({
  isOwner() {console.dir(this);
     return this.meal.owner == Meteor.userId()}
})

Template.mealrow.events({
    'click span'(elt,instance) {
      console.dir(this);
      console.log(this);
      console.log(this.meal._id);
      Meteor.call('userChoose.remove', this.meal);
    },

    'change select'(elt,instance){
      console.dir(this);
      console.log('changed!');
      Meteor.call('updateday',this.meal,instance.$("select").val())
  },
})
