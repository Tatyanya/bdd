package search.pages;

import org.openqa.selenium.By;
import search.selenium.BaseSelenium;

/**
 * Created by Tatyana_Korobitsina on 9/1/2016.
 */
public class CartPage extends BaseSelenium {

    public int productsNumberCount() {
        return driver.findElements(By.xpath("//div[@id='ShopCart']/div/div[contains(@id,'sellerBucket')]")).size();
    }
}
