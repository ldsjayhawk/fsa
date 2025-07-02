const search = document.querySelector(".search")
const playerSearch = document.getElementById("playerSearch");

search.addEventListener("submit", (event) => {
    event.preventDefault();
    const playerName = playerSearch.value.trim();

    if (!playerName.trim()) {
        alert("Please enter a player's name")
        return;
    }

    localStorage.setItem("ls-player", playerName);
    window.location.href = "results.html";
});
