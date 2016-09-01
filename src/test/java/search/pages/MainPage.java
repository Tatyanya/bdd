package search.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import search.selenium.BaseSelenium;

/**
 * Created by Tatyana_Korobitsina on 9/1/2016.
 */
public class MainPage extends BaseSelenium {
    public WebElement searchButton(){
        return driver.findElement(By.xpath("//*[@id='gh-btn']"));
    }
    public WebElement searchField(){
        return driver.findElement(By.xpath("//*[@id='gh-ac']"));
    }
}
