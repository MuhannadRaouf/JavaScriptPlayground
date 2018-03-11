var dice =require("./dice");
var die = dice.game;

die.name = "Delta";
console.log(die.name);
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die.totalRolls);
console.log(die);