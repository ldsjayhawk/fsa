    import pickle
from requests import Session
from fantraxapi import FantraxAPI

# Set your league ID
league_id = "uwu7trprm1uzxajd"

# Create the API object
api = fantraxapi(league_id)

# Login using your credentials
# api.login(email="crisbecca@gmail.com", password="hinckley95")
# Load cookies from the file you saved with Selenium
session = Session()
with open("fantraxloggedin.cookie", "rb") as f:
    cookies = pickle.load(f)
    for cookie in cookies:
        session.cookies.set(cookie["name"], cookie["value"])


# Get list of teams
teams = api.get_teams()

# Each item in teams is a Team object
for team in teams:
    print(team.name, team.short, team.team_id)



