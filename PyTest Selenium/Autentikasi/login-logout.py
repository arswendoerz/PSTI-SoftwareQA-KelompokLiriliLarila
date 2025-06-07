from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

SPOTIFY_EMAIL = "arswendoerza00@gmail.com"

driver = webdriver.Chrome()
driver.get("https://open.spotify.com/")

login_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='login-button' or contains(text(), 'Log in')]"))
)
login_button.click()

email_input = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "login-username"))
)
email_input.send_keys(SPOTIFY_EMAIL)

continue_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='login-button' or contains(text(), 'Lanjutkan') or contains(text(), 'Continue')]"))
)
continue_button.click()

print("Silakan masukkan kata sandi atau OTP secara manual jika diminta...")
time.sleep(20)

#logout
menu_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='user-widget-link']"))
)
menu_button.click()

logout_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='user-widget-dropdown-logout']"))
)
logout_button.click()

print("Anda telah logout dari Spotify.")
time.sleep(5)
driver.quit()
