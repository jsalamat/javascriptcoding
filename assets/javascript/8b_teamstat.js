const team = {
  _players: [
    {firstName: "Kenny",
     lastName: "Omega",
     age: 36},
     {firstName: "Matt",
     lastName: "Jackson",
     age: 37},
     {firstName: "Nick",
     lastName: "Jackson",
     age: 35},
  ],
  _games: [
    {opponent: "Roman Reigns",
     teamPoints: 98,
     opponentPoints: 89},
    
  ],
  
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games;
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  
  addGame(opp, teamPt, oppPt) {
    let game = {
      opponent: opp,
      teamPoints: teamPt,
      opponentPoints: oppPt
    };
    this.games.push(game);
  }
  
  
};

team.addPlayer("Cody", "Rhodes", 36);
team.addPlayer("Marty", "Scrull", 34);
team.addPlayer("Adam", "Page", 25);

team.addGame("The Revival", 99, 56);
team.addGame("Balor Club", 89, 87);

console.log(team);