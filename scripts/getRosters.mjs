export async function getRosterData() {
    const teamabv = localStorage.getItem("ls-abv");
    const url = `https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamRoster?teamAbv=${teamabv}&getStats=true&fantasyPoints=false`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd62ff818fdmshf4feea5fde1723bp13ebe8jsn1893f39e23c2',
            'x-rapidapi-host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);

        if (result.body.roster) {
            localStorage.removeItem("ls-error")
            return result.body.roster;
        } else 
            localStorage.setItem("ls-error", "No Roster Available!");

    } catch (error) {
        console.error(error);
    }
}