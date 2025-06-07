from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import time

SPOTIFY_EMAIL = "arswendoerza@gmail.com"

driver = webdriver.Chrome()
actions = ActionChains(driver)

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

filter_selectors = [
    "div:nth-child(2) > .UnwG2v9ISmcUhnjKj22Y .LegacyChipInner__ChipInnerComponent-sc-1qguixk-0",
    "div:nth-child(3) .LegacyChipInner__ChipInnerComponent-sc-1qguixk-0",
    "div:nth-child(4) .LegacyChipInner__ChipInnerComponent-sc-1qguixk-0",         
    "div:nth-child(5) > .UnwG2v9ISmcUhnjKj22Y .LegacyChipInner__ChipInnerComponent-sc-1qguixk-0"
]

for selector in filter_selectors:
    try:
        element = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, selector))
        )
        actions.move_to_element(element).perform()
        time.sleep(1)
        element.click()
        print(f"Klik filter: {selector}")
        time.sleep(2)
    except Exception as e:
        print(f"Gagal klik filter {selector}: {e}")

print("Selesai mengklik semua filter.")
