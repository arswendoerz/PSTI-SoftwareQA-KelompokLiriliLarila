from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
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

try:
    accept_cookies = WebDriverWait(driver, 5).until(
        EC.element_to_be_clickable((By.ID, "onetrust-accept-btn-handler"))
    )
    accept_cookies.click()
except:
    pass

actions = ActionChains(driver)

playpause_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='control-button-playpause']"))
)
driver.execute_script("arguments[0].scrollIntoView(true);", playpause_button)
actions.move_to_element(playpause_button).click().perform()
time.sleep(5)
actions.move_to_element(playpause_button).click().perform()
time.sleep(2)

skip_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='control-button-skip-forward']"))
)
driver.execute_script("arguments[0].scrollIntoView(true);", skip_button)
actions.move_to_element(skip_button).click().perform()
time.sleep(5)

previous_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='control-button-skip-back']"))
)
driver.execute_script("arguments[0].scrollIntoView(true);", previous_button)
actions.move_to_element(previous_button).click().perform()
time.sleep(5)

driver.quit()
