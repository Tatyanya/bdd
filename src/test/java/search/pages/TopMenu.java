package search.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import search.selenium.BaseSelenium;
import search.util.TimeOutUtils;

public class TopMenu extends BaseSelenium {
    private static final Logger LOG = LogManager.getLogger(TopMenu.class);


    private WebElement languageSwitcher(){
        return driver.findElement(By.xpath("//li[@id='gh-eb-Geo']/div[@class='gh-menu']/a[contains(@id, 'default')]/span[@class='gh-eb-Geo-txt']"));
    }

    private WebElement signOutLink(){
        return driver.findElement(By.xpath("//div[@id='gh-top']//li[@id='gh-uo']/a"));
    }

    private WebElement register() {
        return driver.findElement(By.xpath("//div[@id='gh-top']//span[@id='gh-ug-flex']/a"));
    }
    public WebElement profileUser() {
        return driver.findElement(By.id("gh-ug"));
    }

    public WebElement signInLink(){
        return driver.findElement(By.xpath("//div[@id='gh-top']//span[@id='gh-ug']/a"));
    }

    private WebElement userMenu() {
        return driver.findElement(By.xpath("//div[@id='gh-top']//li[@id='gh-eb-u']/a"));
    }

    public String getURL() {
        return driver.getCurrentUrl();
    }

    public WebElement cartLink() {
    return driver.findElement(By.id("gh-cart-i"));
    }


    public boolean isSingOuLinkDisplayed(){
        try{
            return  signOutLink().isDisplayed();
        }
        catch(NoSuchElementException ex){
            return false;
        }
    }

        public void logOut() {
        actions.moveToElement(userMenu()).build().perform();
        if (isSingOuLinkDisplayed()) {
            actions.moveToElement(profileUser()).build().perform();
            signOutLink().click();
            LOG.info("User loged out");
        }
    }

     public String getTextSwither(){
        return languageSwitcher().getText();
     }
    public void switchToEnglish(){
        if(!getTextSwither().contains("English")) {
            actions.moveToElement(languageSwitcher()).build().perform();
            TimeOutUtils.sleepInSeconds(1);
            driver.findElement(By.id("gh-eb-Geo-a-en")).click();
        }
        LOG.info("English locale is selected");

    }

    public boolean iSignInLinkDisplayed(){
        try{
            return signInLink().isDisplayed();
        }
        catch(NoSuchElementException ex){
            return false;
        }
    }
}
