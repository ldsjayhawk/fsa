import time
import pickle
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

# Setup Chrome browser
options = Options()
options.add_argument("--window-size=1200,800")  # Optional
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Open Fantrax login page
driver.get("https://www.fantrax.com/login")

# Give yourself time to log in manually
print("🟢 Please log in to Fantrax in the opened browser window.")
print("⌛ Waiting 60 seconds...")
time.sleep(60)

# Save cookies after login
with open("fantraxloggedin.cookie", "wb") as f:
    pickle.dump(driver.get_cookies(), f)

driver.quit()
print("✅ Fantrax login cookie saved to fantraxloggedin.cookie.")