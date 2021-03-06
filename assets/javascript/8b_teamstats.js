const team = {
  _players: [
        {firstName:"Kenny", 
         lastName:"Omega", 
         age: 34},
        {firstName:"Matt", 
         lastName:"Jackson", 
         age: 32},
        {firstName:"Nick", 
         lastName:"Jackson", 
         age: 28},
        
    ],
  _games: [
        {opponent: "Roman Reigns",
        teamPoints: 42, 
        opponentPoints: 27},
        {opponent: "The Revival",
        teamPoints: 53, 
        opponentPoints: 13},
        {opponent: "The Stooge",
        teamPoints: 100, 
        opponentPoints: 7},
  ],
  
  get players () {
    return this._players;
  },
  
  get games () {
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

  addGame(opponentName, teamPts, oppPts) {
    let game ={
      opponent: opponentName,
      teamPoints: teamPts,
      opponentPoints: oppPts,
    };
    this.games.push(game);
  },

};

team.addPlayer('Cody', 'Rhodes', 32);
team.addPlayer('Marty', 'Scurll', 29);
team.addPlayer('Adam', 'Page', 26);

console.log(team.players);

console.log("----------------------------------");

team.addGame('Chris Jericho', 80, 73);
team.addGame('NWO', 70, 56);
team.addGame('Degeneration X', 90, 10);

console.log(team.games);