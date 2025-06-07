from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

SPOTIFY_EMAIL = "arswendoerza@gmail.com"

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
print("Beranda Spotify web player telah dibuka.")

search_input = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, "//input[@data-testid='search-input']"))
)
search_input.clear()
search_input.send_keys("O, Tuan")

time.sleep(3)


try:
    first_track = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "(//div[@data-testid='tracklist-row'])[1]"))
    )
    first_track.click()
    time.sleep(0,5)
    first_track.click()
    print("Track pertama berhasil diklik 2 kali.")

except Exception as e:
    print("Gagal menemukan atau mengklik track pertama.")
    print(e)

time.sleep(15)

driver.quit()
