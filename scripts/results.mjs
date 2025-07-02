document.addEventListener("DOMContentLoaded", () => {
    const playerName = localStorage.getItem("ls-player");
    searchPlayer(playerName);
});

function showPage() {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("cards");
}
async function searchPlayer(playerName){
    const url = `https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBPlayerInfo?playerName=${playerName}&getStats=true&statsSeason=2025`;
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
        displayPlayerSearch(result.body)
    } catch (error) {
        console.error(error);
    }

}

export function displayPlayerSearch(players) {
    const cards = document.querySelector("#cards")

    if (!cards) return;
    cards.innerHTML = "";

    if (players.length === 0) {
        const noPlayer = document.createElement("p");
        noPlayer.textContent = `No results for that player.`
        cards.appendChild(noPlayer)
        return;
    }

    players.forEach(player => {
        const playerCard = document.createElement("section");
        const playerName = document.createElement('h2');
        const playerNum = document.createElement('p')
        const playerPosition = document.createElement('p')
        const playerpic = document.createElement('img')

        playerNum.textContent = `# ${player.jerseyNum ?? 'N/A'}`;
        playerName.textContent = `${player.longName}`;
        playerPosition.textContent = `Position: ${player.pos}`;
        playerpic.setAttribute('src', `${player.mlbHeadshot}`);
        playerpic.setAttribute('alt', `${player.playerName} logo`);
        playerpic.setAttribute('loading', 'lazy');
        playerpic.setAttribute('width', '100');
        playerpic.setAttribute('height', '100');

        playerCard.appendChild(playerName); 
        playerCard.appendChild(playerpic); 
        playerCard.appendChild(playerNum); 
        playerCard.appendChild(playerPosition);

        if (player.pos === "P") {

            let win = document.createElement('p')
            let era = document.createElement('p')
            let so = document.createElement('p')
            let save = document.createElement('p')
            win.textContent = `Wins: ${player.stats?.Pitching?.Win ?? 0}`;
            era.textContent = `ERA: ${player.stats?.Pitching?.ERA ?? 'N/A'}`;
            so.textContent = `K: ${player.stats?.Pitching?.SO ?? 0}`;
            save.textContent = `SV: ${player.stats?.Pitching?.Save ?? 0}`;
            playerCard.appendChild(win) 
            playerCard.appendChild(era) 
            playerCard.appendChild(so) 
            playerCard.appendChild(save)

        } else {

            let avg = document.createElement('p')
            let hr = document.createElement('p')
            let rbi = document.createElement('p')
            let sb = document.createElement('p')
            avg.textContent = `AVG: ${player.stats?.Hitting?.avg ?? 'N/A'}`;
            hr.textContent = `HR: ${player.stats?.Hitting?.HR ?? 0}`;
            rbi.textContent = `RBI: ${player.stats?.Hitting?.RBI ?? 0}`;
            sb.textContent = `SB: ${player.stats?.BaseRunning?.SB ?? 0}`;
            playerCard.appendChild(avg) 
            playerCard.appendChild(hr) 
            playerCard.appendChild(rbi)
            playerCard.appendChild(sb)
        }
    
    // playerClassList.add('player');
    
    cards.appendChild(playerCard); 
    showPage();
});
    }
