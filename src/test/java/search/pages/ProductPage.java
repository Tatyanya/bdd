package search.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import search.selenium.BaseSelenium;

/**
 * Created by Tatyana_Korobitsina on 9/1/2016.
 */
public class ProductPage extends BaseSelenium{

    public WebElement buyItNowButton(){
        return driver.findElement(By.xpath("//div[@class='u-flL']/a"));
    }
    public WebElement addToCartButton(){
        return driver.findElement(By.xpath("//div[@class='u-flL']/a"));
    }

    public WebElement setColorDroplist(){
        return driver.findElement(By.id("msku-sel-1"));
    }

    public WebElement setStorageCapacityDroplist(){
        return driver.findElement(By.id("msku-sel-2"));
    }

    public boolean isColorParameterDisplayed(){
        try{
            return setColorDroplist().isDisplayed();
        }
        catch (NoSuchElementException ex){
            return false;
        }
    }

    public boolean isCapacityParameterDisplayed(){
        try{
            return setStorageCapacityDroplist().isDisplayed();
        }
        catch (NoSuchElementException ex){
            return false;
        }
    }

    public void applyProductParameters(){
        if (isColorParameterDisplayed()){
            new Select(setColorDroplist()).selectByIndex(1);
        }
        if (isCapacityParameterDisplayed()){
            new Select(setStorageCapacityDroplist()).selectByIndex(1);
        }
    }


}
