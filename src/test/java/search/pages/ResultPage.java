package search.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import search.selenium.BaseSelenium;

/**
 * Created by Tatyana_Korobitsina on 9/1/2016.
 */
public class ResultPage extends BaseSelenium {

    public WebElement searchResultByNumber(String number) {
        return driver.findElement(By.xpath("//div[@id='ResultSetItems']/ul/li[" + number + "]/h3/a"));
    }

    public WebElement paginationPageByNumber(String number){
        return driver.findElement(By.xpath("//table[@id='Pagination']/tbody/tr/td[@class ='pages']/a["+number+"]"));
    }

    public WebElement previousPageArrow(){
        return driver.findElement(By.xpath("//table[@id='Pagination']/tbody/tr/td[@class ='pagn-prev']/a"));
    }

    public WebElement nextPageArrow(){
        return driver.findElement(By.xpath("//table[@id='Pagination']/tbody/tr/td[@class ='pagn-next']/a"));
    }

    public boolean isNextArrowLinkDisabled(){
        try{
            return nextPageArrow().getAttribute("aria-disabled").contains("true");
        }
        catch(NoSuchElementException | NullPointerException ex){
            return false;
        }
    }
}
