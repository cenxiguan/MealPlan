const ourSponsors = [
 {name:"Brother",amt:"$2,000"},
 {name:"Father",amt:"$50,00"},
 {name:"Sister",amt:"$400"}
]

const today = new Date()
Template.sponsors.helpers({
	sponsorData: ourSponsors,
  today
})
