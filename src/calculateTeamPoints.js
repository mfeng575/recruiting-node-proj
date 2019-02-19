// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]
module.exports = (players) => {
  const mapTeams = new Map()

  players.map(player => {
    if (player.isActive) {
      let team = getTeam(mapTeams, player.team)
      team.points += player.points
    }
  })

  return [...mapTeams.values()].sort((a, b) => b['points'] - a['points'])
}

const getTeam = (mapTeams, teamName) => {
  let team = mapTeams.get(teamName)
  if (!team) {
    team = { team: teamName, points: 0 }
    mapTeams.set(teamName, team)
  }
  return team
}
