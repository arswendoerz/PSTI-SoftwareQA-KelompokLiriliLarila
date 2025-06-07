from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import time

SPOTIFY_EMAIL = "arswendoerza00@gmail.com"

driver = webdriver.Chrome()
wait = WebDriverWait(driver, 15)
actions = ActionChains(driver)

driver.get("https://open.spotify.com/")
login_button = wait.until(
    EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='login-button' or contains(text(), 'Log in')]"))
)
login_button.click()

email_input = wait.until(EC.presence_of_element_located((By.ID, "login-username")))
email_input.send_keys(SPOTIFY_EMAIL)

continue_button = wait.until(
    EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='login-button' or contains(text(), 'Lanjutkan') or contains(text(), 'Continue')]"))
)
continue_button.click()

print("Silakan masukkan password atau OTP secara manual jika diminta...")
time.sleep(20)  

search_input = wait.until(EC.presence_of_element_located((By.XPATH, "//input[@data-testid='search-input']")))
search_input.clear()
search_input.send_keys("Secukupnya")
time.sleep(3)

first_track = wait.until(EC.presence_of_element_located((
    By.CSS_SELECTOR, "div[data-testid='tracklist-row']"
)))

actions.move_to_element(first_track).perform()
time.sleep(1)

more_button = first_track.find_element(By.CSS_SELECTOR, "button[data-testid='more-button']")
wait.until(EC.element_to_be_clickable(more_button)).click()
print("Klik titik tiga berhasil")

add_to_playlist = wait.until(EC.element_to_be_clickable((By.XPATH, "//span[contains(@data-encore-id, 'type') and text()='Add to playlist']")))
add_to_playlist.click()
print("Klik 'Add to playlist' berhasil")

playlist_g = wait.until(EC.element_to_be_clickable((By.XPATH, "//span[contains(@data-encore-id, 'type') and text()='g']")))
playlist_g.click()
print("Lagu ditambahkan ke playlist 'g'")

driver.quit()