//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeStreetFighter(type, gender, experince, loss) {
  this.fighter_fighting_style = type;
  this.fighter_gender = gender;
  this.fighter_experience = experince;
  this.fighter_loss = loss;

  this.fighter_special_move = function () {
    console.log(
      `The figher specialized in ${this.fighter_fighting_style}, did their special move. `
    );
  };
  this.fighter_odds = function () {
    if (this.fighter_wins == 0) {
      console.log("This fighter is unbeaten");
    }
  };
  this.fighterKnockedOut = function () {
    console.log("BAAMMMM OUR FIGHTER IS KNOCKED OUT!!!!");
  };
}
