package search.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import search.selenium.BaseSelenium;

/**
 * Created by Tatyana_Korobitsina on 9/1/2016.
 */
public class CartPage extends BaseSelenium {

    public WebElement productsByNumber(String number) {
        return driver.findElement(By.xpath("//div[@id='ShopCart']/div/div[contains(@id,'sellerBucket')][" + number + "]"));
    }
}
