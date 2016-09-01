package search.selenium;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;
import search.util.TimeOutUtils;


public class BaseSelenium {
    public static WebDriver driver;
    protected static Actions actions;

    public static void init() {
        System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\chromedriver.exe");
        // driver = new FirefoxDriver();
        ChromeOptions options = new ChromeOptions();
        //options.addArguments("--lang= en-GB");
        options.addArguments("--disable-extensions");
        driver = new ChromeDriver(options);

        actions = new Actions(driver);
        driver.manage().window().maximize();
    }

    protected static void navigateToBaseUrl() {
        driver.get("http://www.ebay.com");
    }

    public static void navigateTo(String url) {
        driver.get(url);
    }

    public static void close() {
        try {
            driver.quit();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            driver = null;
        }
    }

    public void waitForPageToLoad() {
        ExpectedCondition<Boolean> expectation = new
                ExpectedCondition<Boolean>() {
                    public Boolean apply(WebDriver driver) {
                        return ((JavascriptExecutor) driver).executeScript("return document.readyState").toString().equals("complete");
                    }
                };

        TimeOutUtils.sleepInSeconds(1);
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(expectation);

    }
}
