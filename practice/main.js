const players = [
  { name: 'CR7', ucls: 5 },
  { name: 'Messi', ucls: 4 },
  { name: 'Iniesta', ucls: 4 },
  { name: 'Buffon', ucls: 0 },
  { name: 'Neymar', ucls: 1 }
];

// Filter without filter players with less than 2 ucls
const newArr = [];
for (let i = 0; i < players.length; i++) {
  if (players[i].ucls < 2) newArr.push(players[i]);
}
console.log(newArr);

// Filter function
const filterArr = players.filter(player => player.ucls >= 1);
console.log(filterArr);

const playerNames = [];
// Map without map - all players names
for (let i = 0; i < players.length; i++) {
  playerNames.push(players[i].name);
}
console.log(playerNames);

// Map function
const names = players.map(player => player.name);
console.log(names);

// forEach
players.forEach(player => console.log(player));

// Find
const neymar = players.find(player => player.name === 'Neymar');

const hasNoWinners = players.some(player => player.ucls <= 0);
console.log(hasNoWinners);

const totalWins = players.reduce((total, player) => player.ucls + total, 0);
console.log(totalWins);

// Includes
const goat = players.find(player => player.name === 'Messi');

const includesGoat = players.includes(goat);
console.log(includesGoat);
