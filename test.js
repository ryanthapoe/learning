async function getTotalGoals(team, year) {
  const url1 = `http://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=1`;
  const url2 = `http://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=1`;
  const rawMatches = await fetch(url1);
  const matches = await rawMatches.json();
  console.log(matches);
}
