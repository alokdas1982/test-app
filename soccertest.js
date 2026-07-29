/* 
1) You are given a 2D array of game data for nine soccer teams. The first element represents the wins. The second element represents the losses. The third element represents the points given. The position in each array represents the metrics for that team number, ie position 0 in wins, losses, and points given belongs to team 1 (position 0). Position 1 for wins, losses, and points given belongs to team 2 (position 1). I want you to sort the data so that I can see the teams ordered by winners to losers, winners having the highest number of wins. If two or more teams tie in wins and losses, the team that gave up the least amount of points win over those who gave up more points. I want you to print the results so that I can see the results by team, wins, losses, and points given with the top team first and the bottom team last. 

2) Share the Dataset or Array // Data sets const gameData = [[7, 3, 7, 5, 4, 7, 7, 7, 5], [3, 7, 3, 5, 6, 3, 3, 3, 5],[25, 12, 24, 8, 14, 17, 28, 15, 13]] const teamNames = ['Salmanus', 'Savvilles', 'Aphretros', 'Philidas', 'Adelphochus', 'Aesare', 'Erymasius', 'Hectillos', 'Krateus']
*/

const gameData = [
  [7, 3, 7, 5, 4, 7, 7, 7, 5],  // wins
  [3, 7, 3, 5, 6, 3, 3, 3, 5],  // losses
  [25, 12, 24, 8, 14, 17, 28, 15, 13] // points given
];

const teamNames = [
  'Salmanus', 'Savvilles', 'Aphretros', 'Philidas',
  'Adelphochus', 'Aesare', 'Erymasius', 'Hectillos', 'Krateus'
];

// Step 1: Combine into objects
const teams = teamNames.map((name, i) => ({
  team: name,
  wins: gameData[0][i],
  losses: gameData[1][i],
  points: gameData[2][i]
}));

// Step 2: Sort
teams.sort((a, b) => {
  if (b.wins !== a.wins) return b.wins - a.wins;        // wins desc
  if (a.losses !== b.losses) return a.losses - b.losses; // losses asc
  return a.points - b.points;                           // points asc
});

// Step 3: Print results
console.log("Team Rankings:\n");
teams.forEach((t, index) => {
  console.log(
    `${index + 1}. ${t.team} - Wins: ${t.wins}, Losses: ${t.losses}, Points Given: ${t.points}`
  );
});