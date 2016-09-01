package search.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import search.selenium.BaseSelenium;

/**
 * Created by Tatyana_Korobitsina on 8/31/2016.
 */
public class LoginPage extends BaseSelenium {
    private TopMenu topMenu = new TopMenu();

    public void switchToEnglish(){
        topMenu.switchToEnglish();
    }

    public WebElement loginField(){
        return driver.findElement(By.xpath("//div[@id='pri_signin']/div/span/input[contains(@type, 'text')]"));
    }

    private WebElement passwordField(){
        return driver.findElement(By.xpath("//div[@id='pri_signin']/div[@class='m19']/span/input"));
    }
    public WebElement loginButton(){
        return driver.findElement(By.id("sgnBt"));
    }

    public WebElement remindMeLaterButton(){
        return driver.findElement(By.id("rmdLtr"));
    }

    public boolean isSecretQuestionsFormDisplayed(){
        try{
            return driver.findElement(By.id("secretQuesForm")).isDisplayed();
        }
        catch (NoSuchElementException ex){
            return false;
        }
    }

    private void setUserName(String name) {
        loginField().clear();
        loginField().sendKeys(name);
    }

    private void setPassword(String pass) {
        passwordField().clear();
        passwordField().sendKeys(pass);
    }

    public void clickSignInButton() {
        loginButton().click();
    }

    public void logIn(String name, String pass) {
        setUserName(name);
        setPassword(pass);
        clickSignInButton();
    }
}
