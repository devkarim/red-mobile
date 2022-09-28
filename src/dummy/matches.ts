const ALL_MATCHES_DUMMY: LeagueMatchesToday[] = [
  {
    date: '2022-09-28',
    league: 'UEFA Champions League',
    matches: [
      {
        id: 418479,
        season: {
          id: 1491,
          startDate: '2022-06-21',
          endDate: '2023-06-10',
          currentMatchday: 3,
        },
        utcDate: '2022-06-21T13:00:00Z',
        status: 'FINISHED',
        matchday: null,
        stage: 'PRELIMINARY_ROUND',
        group: null,
        lastUpdated: '2022-09-28T16:20:03Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'AWAY_TEAM',
          duration: 'REGULAR',
          fullTime: { homeTeam: 1, awayTeam: 2 },
          halfTime: { homeTeam: 1, awayTeam: 0 },
          extraTime: { homeTeam: null, awayTeam: null },
          penalties: { homeTeam: null, awayTeam: null },
        },
        homeTeam: { id: 1902, name: 'SP La Fiorita' },
        awayTeam: { id: 8912, name: "Inter Club d'Escaldes" },
        referees: [
          {
            id: 44921,
            name: 'Rohit Saggi',
            role: 'REFEREE',
            nationality: 'Norway',
          },
        ],
      },
    ],
  },
  {
    date: '2022-09-28',
    league: 'Premier League',
    matches: [
      {
        id: 416384,
        season: {
          id: 1490,
          startDate: '2022-08-05',
          endDate: '2023-05-28',
          currentMatchday: 9,
        },
        utcDate: '2022-08-05T19:00:00Z',
        status: 'FINISHED',
        matchday: 1,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-09-28T16:20:11Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'AWAY_TEAM',
          duration: 'REGULAR',
          fullTime: { homeTeam: 0, awayTeam: 2 },
          halfTime: { homeTeam: 0, awayTeam: 1 },
          extraTime: { homeTeam: null, awayTeam: null },
          penalties: { homeTeam: null, awayTeam: null },
        },
        homeTeam: { id: 354, name: 'Crystal Palace FC' },
        awayTeam: { id: 57, name: 'Arsenal FC' },
        referees: [
          {
            id: 11580,
            name: 'Anthony Taylor',
            role: 'REFEREE',
            nationality: 'England',
          },
        ],
      },
    ],
  },
];

export default ALL_MATCHES_DUMMY;
