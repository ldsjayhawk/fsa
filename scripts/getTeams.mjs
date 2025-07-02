import { displayTeams } from "./teams.mjs";

const url = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeams?teamStats=true&topPerformers=false&rosters=true';
const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'd62ff818fdmshf4feea5fde1723bp13ebe8jsn1893f39e23c2',
      'x-rapidapi-host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
    }
  };

async function getTeamData() {
    const response = await fetch(url,options);
    if (response.ok) {
      const data = await response.json();
      // console.table(data);
      displayTeams(data.body);
    }};


getTeamData();

