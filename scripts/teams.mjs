function showPage() {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("cards");
}

export function displayTeams (teams) {
    const cards = document.querySelector("#cards")

    if (!cards) return;
    cards.innerHTML = "";
    teams.forEach(team => {
        let card = document.createElement("section");
        let teamName = document.createElement('h2');
        let teamLogo = document.createElement('img');

        teamName.textContent = `${team.teamCity} ${team.teamName}`;
        teamLogo.setAttribute('src', team.mlbLogo1);
        teamLogo.setAttribute('alt', `${team.teamName} logo`);
        teamLogo.setAttribute('loading', 'lazy');
        teamLogo.setAttribute('width', '100');
        teamLogo.setAttribute('height', '100');
        
        card.appendChild(teamLogo);
        card.appendChild(teamName); 
        
        
        card.classList.add('team');
        
        card.addEventListener("click", () => {
            localStorage.setItem("ls-city", team.teamCity);
            localStorage.setItem("ls-name", team.teamName);
            localStorage.setItem("ls-logo", team.mlbLogo1);
            localStorage.setItem("ls-id", team.teamID);
            localStorage.setItem("ls-abv", team.teamAbv);
            window.location.href = "roster.html";
        });
        
        cards.appendChild(card); 
        showPage();
    })
}