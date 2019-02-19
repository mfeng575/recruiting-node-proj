const calculateTeamPoints = require('../calculateTeamPoints')

describe('calculateTeamPoints', () => {
  beforeEach(() => {
    // ...
  })
  afterAll(() => {
    // ...
  })

  test('{Processing aggregate team points for players dataset}', () => {
    var data = require('./__data__/players.json')
    expect(calculateTeamPoints(data)).toEqual([{
      team: 'green',
      points: 40
    }, {
      team: 'red',
      points: 20
    }, {
      team: 'blue',
      points: 10
    }])
  })
})
