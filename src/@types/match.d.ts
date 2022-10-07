interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

interface Match {
  area: Area;
  competition: Competition;
  season: Season;
  id: number;
  utcDate: string;
  status: MatchStatus;
  minute: string;
  injuryTime: number;
  attendance?: number;
  venue?: string;
  matchday: number;
  stage: string;
  group: any;
  lastUpdated: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  goals: Goal[];
  penalties: Penalty[];
  bookings: any[];
  substitutions: any[];
  odds: Odds;
  referees: Referee[];
}

interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}

interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: any;
  stages: string[];
}

interface Coach {
  id?: number;
  name?: string;
  nationality?: string;
}

interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  coach: Coach;
  leagueRank: number;
  formation: string;
  lineup: any[];
  bench: any[];
}

interface Score {
  winner: string;
  duration: string;
  fullTime: MatchTime;
  halfTime: MatchTime;
  extraTime: MatchTime;
  penalties: MatchTime;
}

interface MatchTime {
  home: number;
  away: number;
}
interface Goal {
  minute: number;
  injuryTime?: number;
  type: string;
  team: GoalTeam;
  scorer: Scorer;
  assist?: Assist;
  score: GoalScore;
}

interface GoalTeam {
  id: number;
  name: string;
}

interface Scorer {
  id: number;
  name: string;
}

interface Assist {
  id: number;
  name: string;
}

interface GoalScore {
  home: number;
  away: number;
}

interface Penalty {
  player: Player;
  team: GoalTeam;
  scored: boolean;
  score?: GoalScore;
}

interface Player {
  id: number;
  name: string;
}

interface Odds {
  homeWin: number;
  draw: number;
  awayWin: number;
}

interface Referee {
  id: number;
  name: string;
  type: string;
  nationality?: string;
}

type MatchStatus =
  | 'SCHEDULED'
  | 'LIVE'
  | 'IN_PLAY'
  | 'PAUSED'
  | 'FINISHED'
  | 'POSTPONED'
  | 'SUSPENDED'
  | 'CANCELLED';

interface LeagueMatches {
  league: Competition;
  date: string;
  matches: Match[];
}

type DateMatches = { [key: string]: Match[] };

type TeamKey = 'homeTeam' | 'awayTeam';
type ScoreTeamKey = 'home' | 'away';
