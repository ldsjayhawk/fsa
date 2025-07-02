import { getRosterData } from "./getRosters.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const team = document.querySelector("#team")
    const city = localStorage.getItem("ls-city");
    const name = localStorage.getItem("ls-name");
    
function getTeamColor() {
    const id = localStorage.getItem("ls-id");
    let teamColor = "";
    
    if (["1" ,"2", "4" ,"7" ,"8" ,"13" ,"21" ,"26","28" ,"30"].includes(id)) {
        teamColor = "crimson"
    } else if (["5" ,"12" ,"14" ,"16" ,"17" ,"23" ,"29"].includes(id)) {
        teamColor = "darkblue"
    } else if (["3" ,"11" ,"18" ,"24"].includes(id)) {
        teamColor = "orange"
    } else if ([ "6" ,"9" ,"10" ,"15" ,"19" ,"22"].includes(id)) {
        teamColor = "black"
    } else if ([ "25" ,"27"].includes(id)) {
        teamColor = "lightblue"
    } else if (id === "20") {
        teamColor = "darkgreen"
    } else teamColor = "gray"

    const mlbTeamName = `${city} ${name}`

    team.textContent = mlbTeamName;
    team.style.backgroundColor = teamColor;

    if (team.style.backgroundColor === "lightblue") {
        team.style.color = "black"}
}

getTeamColor();
})


export function displayRosters(players) {
    const rosterError = localStorage.getItem("ls-error");
    const rosters = document.querySelector("#rosters");

    if (!rosters) return;
    rosters.innerHTML = "";
    
    if (rosterError) {
        rosters.textContent = rosterError ;
        rosters.style.color = "crimson";
        rosters.style.fontWeight = 700;
    } else 
        players.forEach(player => {
            let rosterCard = document.createElement("section");
            let playerName = document.createElement('p');
            let playerNum = document.createElement('p')
            let playerPosition = document.createElement('p')

            playerNum.textContent = `${player.jerseyNum}`;
            playerName.textContent = `${player.longName}`;
            playerPosition.textContent = `${player.pos}`;

            rosterCard.appendChild(playerName); 
            rosterCard.appendChild(playerNum); 
            rosterCard.appendChild(playerPosition);
            
            rosterCard.classList.add('player');

            rosterCard.addEventListener("click", () => {
                localStorage.setItem("ls-player", player.longName);
                window.location.href = "results.html";
        });
            
            rosters.appendChild(rosterCard); 
        });
}
getRosterData().then(data => {
    displayRosters(data);
});


