// const hamburger = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamburger.addEventListener('click', () => {
// 	navigation.classList.toggle('open');
// 	hamburger.classList.toggle('open');
// });


// // dates in footer
// const d = new Date();
// const currentyear = d.getFullYear();
// document.getElementById("draftyear").innerHTML = currentyear;
// document.getElementById("currentyear").innerHTML = currentyear;

// const modified = new Date(document.lastModified);
// const date = modified.toLocaleDateString()
// document.getElementById("lastmodified").innerHTML = date;

try{
    const fs = require('fs');
    const data = fs.readFileSync('ba500.txt','utf8');

    const players = JSON.parse(data)

    console.log(players);
}
catch(error) {
    console.error("Error reading or parsing file", error)
}

// players = [
//     {rank: "1",
//     player:  "Charlie Condon",
//     pos: "OF"},
//     {rank: "2",
//     player:  "Travis Bazzana",
//     pos: "2B"},
//     {rank: "3",
//     player:  "JJ Wetherholt",
//     pos: "SS"},
//     {rank: "4",
//     player:  "Chase Burns",
//     pos: "P"},
//     {rank: "5",
//     player:  "Jac Caglianone",
//     pos: "1B"},
//     {rank: "6",
//     player:  "Hagen Smith",
//     pos: "P"},
//     {rank: "7",
//     player:  "Braden Montgomery",
//     pos: "OF"},
//     {rank: "8",
//     player:  "Nick Kurtz",
//     pos: "1B"},
//     {rank: "9",
//     player:  "Konnor Griffin",
//     pos: "OF"},
//     {rank: "10",
//     player:  "Bryce Rainer",
//     pos: "SS"}        
// ]

picks = [
    {overall: 1, pick: "1-1",abbrev: "BOS", team:"Boston Red Sox", player: "Jac Caglianone 1B/LHP KCR"},
    {overall: 2, pick: "1-2",abbrev: "PIT", team:"Pittsburgh Pirates", player: "Nick Kurtz 1B OAK"},
    {overall: 3, pick: "1-3",abbrev: "ATL", team:"Atlanta Braves", player: "Travis Bazzana 2B/CLE"},
    {overall: 4, pick: "1-4",abbrev: "SD", team:"San Diego Padres", player: ""},
    {overall: 5, pick: "1-5",abbrev: "DET", team:"Detroit Tigers", player: ""},
    {overall: 6, pick: "1-6",abbrev: "CLE", team:"Cleveland Guardians", player: ""},
]


// const fileInput = document.getElementById('../FGM Draft.txt')
const teams = [
    {team: "1",
    name: "Arizona Diamondbacks",
    username: "Kuesmo"},
    {team: "2",
    name: "Athletics",
    username: "GottaBleve"},
    {team: "3",
    name: "Atlanta Braves",
    username: "Rolltide555"},
    {team: "4",
    name: "Baltimore Orioles",
    username: "benwasik"},
    {team: "5",
    name: "Boston Red Sox",
    username: "jmntl82"},
    {team: "6",
    name: "Chicago Cubs",
    username: "dbreer23"},
    {team: "7",
    name: "Chicago White Sox",
    username: "breethroz"},
    {team: "8",
    name: "Cincinnati Reds",
    username: "davisports"},
    {team: "9",
    name: "Cleveland Guardians",
    username: "briansports01"},
    {team: "10",
    name: "Colorado Rockies",
    username: "Pwst"},
    {team: "11",
    name: "Detroit Tigers",
    username: "christoffurness"},
    {team: "12",
    name: "Houston Astros",
    username: "jschwab"},
    {team: "13",
    name: "Kansas City Royals",
    username: "ldsjayhawk"},
    {team: "14",
    name: "Los Angeles Angels",
    username: "game162"},
    {team: "15",
    name: "Los Angeles Dodgers",
    username: "BHows"},
    {team: "16",
    name: "Miami Marlins",
    username: "CloudZELL91"},
    {team: "17",
    name: "Milwaukee Brewers",
    username: "Alpha5"},
    {team: "18",
    name: "Minnesota Twins",
    username: "gocubsgo7"},
    {team: "19",
    name: "New York Mets",
    username: "deathvalley"},
    {team: "20",
    name: "New York Yankees",
    username: ""},
    {team: "21",
    name: "Philadelphia Phillies",
    username: "chudz"},
    {team: "22",
    name: "Pittsburgh Pirates",
    username: "shannonwalker"},
    {team: "23",
    name: "San Diego Padres",
    username: "BayAreaBallers"},
    {team: "24",
    name: "San Francisco Giants",
    username: "NippyJones"},
    {team: "25",
    name: "Seattle Mariners",
    username: "harschman"},
    {team: "26",
    name: "St. Louis Cardinals",
    username: "RyanJames5"},
    {team: "27",
    name: "Tampa Bay Rays",
    username: "kidd5jersey"},
    {team: "28",
    name: "Texas Rangers",
    username: "rcankosy"},
    {team: "29",
    name: "Toronto Blue Jays",
    username: "frankbullsfan"},
    {team: "30",
    name: "Washington Nationals",
    username: "dave_wasik_sb"}];


const playerList = document.querySelector('#playerList')
const button = document.querySelector('.button');
const teamList = document.querySelector('#teamList');
const team = "";
const id = 111;

// function getTeam(teamid) {
//     teams.forEach(item => {
//         if (teamid == item.id)
//             team = item.name
//         return team
//     })};

const fgm = document.getElementById("fgm");

teams.forEach(item => {
    const option = document.createElement('option');
    option.textContent = item.name;
    fgm.appendChild(option);
});

players.forEach(item => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    // li.textContent = item.player;
    button.textContent = item.player;
    li.append(button);
    playerList.appendChild(li);
    button.onclick = () => {
        alert(`You have selected ${item.player}.  Please click ok to confirm selection`); 
        let teamid = prompt("Please enter team id:");
        const team = getTeam(teamid)
        li.append(`${item.player} ${team}`)
        teamList.appendChild(li);
        playerList.removeChild('li');
    };
});

const teamDropdown = document.getElementById('fgm');
const pickTableBody = document.getElementById('pickTableBody');

// Populate dropdown options for each team
teams.forEach(team => {
    const option = document.createElement('option');
    option.value = team.name;
    option.textContent = team.name;
    teamDropdown.appendChild(option);
});

// Function to Display Filtered Results in Table
function displayFilteredPicks(filterTeam) {
    pickTableBody.innerHTML = ''; // Clear the table body

    const filteredPicks = picks.filter(pick => 
        filterTeam === "" || pick.team === filterTeam
    );

    // Add a row for each filtered pick
    filteredPicks.forEach(pick => {
        const row = document.createElement('tr');

        // Create table cells for each property
        const overallCell = document.createElement('td');
        overallCell.textContent = pick.overall;
        row.appendChild(overallCell);

        const pickCell = document.createElement('td');
        pickCell.textContent = pick.pick;
        row.appendChild(pickCell);

        const teamCell = document.createElement('td');
        teamCell.textContent = pick.team;
        row.appendChild(teamCell);

        const playerCell = document.createElement('td');
        playerCell.textContent = pick.player || " "; // Display "N/A" if player is empty
        row.appendChild(playerCell);

        pickTableBody.appendChild(row);
    });
}

// Initial Display of All Picks
displayFilteredPicks(""); // Show all picks on page load

// Event Listener for Dropdown Selection
teamDropdown.addEventListener('change', () => {
    const selectedTeam = teamDropdown.value;
    displayFilteredPicks(selectedTeam);
});