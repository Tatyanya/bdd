package search.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import search.pages.*;
import search.selenium.BaseSelenium;

import static org.hamcrest.Matchers.containsString;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

public class BaseStepDef extends BaseSelenium {
    private LoginPage loginPage = new LoginPage();
    private TopMenu topMenu = new TopMenu();
    private MainPage mainPage = new MainPage();
    private ResultPage resultPage = new ResultPage();
    private ProductPage productPage = new ProductPage();
    private CartPage cartPage = new CartPage();

    @Given("^I set search request \"([^\"]*)\"$")
    public void iSetSearchRequest(String searchRequest) {
        mainPage.searchField().clear();
        mainPage.searchField().sendKeys(searchRequest);
    }

    @When("^I perfom search$")
    public void iPerfomSearch() {
        mainPage.searchButton().click();
        waitForPageToLoad();

    }

    @Then("^the term query \"([^\"]*)\" should be the first in the Search Result grid$")
    public void theTermQueryShouldBeTheFirstInTheSearchResultGrid(String expectPhrase) {
        String firstSnippet = resultPage.searchResultByNumber("1").getText();
        assertThat(firstSnippet, containsString(expectPhrase));
    }

    @When("^Navigate to site and switch site to English$")
    public void switchLocaleToEnglish() {
        navigateToBaseUrl();
        loginPage.switchToEnglish();
    }


    @When("^User logged out$")
    public void userLoggedOut() {
        topMenu.logOut();
    }

    @Given("^Loggged in user$")
    public void loggedInUser() {

        if (topMenu.iSignInLinkDisplayed()) {
            topMenu.signInLink().click();
            loginPage.logIn("hello.this.is.tanya@gmail.com", "QWERTY123.");
        }

        if (loginPage.isSecretQuestionsFormDisplayed()) {
            loginPage.remindMeLaterButton().click();
        }
    }

    @Then("^user verifies that page \"(.*?)\" is selected$")
    public void userVerifiesThatHeIsOnFirstPage(String number) throws Throwable {
        assertTrue(resultPage.paginationPageByNumber(number).getAttribute("class").contains("curr"));
    }

    @Then("^user verifies that previus page arrow unavailable$")
    public void userVerifiesThatPreviusPageArrowUnavailable() throws Throwable {
        assertTrue(resultPage.previousPageArrow().getAttribute("aria-disabled").contains("true"));
    }

    @When("^user select the link to the next page$")
    public void userSelectTheLinkToTheNextPage() throws Throwable {
        if (!resultPage.isNextArrowLinkDisabled()) {
            resultPage.nextPageArrow().click();
            waitForPageToLoad();
        }
    }

    @Then("^user select item \"([^\"]*)\" from results list$")
    public void userSelectItemFromResultsList(String arg0) throws Throwable {
        resultPage.searchResultByNumber(arg0).click();
        waitForPageToLoad();

    }

    @And("^user click to (buy now|add to cart) button$")
    public void userClickToBuyNowButton(String name) throws Throwable {
        productPage.applyProductParameters();
        if (name.contains("now")) {
            productPage.buyItNowButton().click();
        } else if (name.contains("add")) {
            productPage.addToCartButton().click();
        }
    }

    @Then("^user go to crd and verify count of items$")
    public void userGoToCrdAndVerifyCountOfItems() throws Throwable {
        topMenu.cartLink().click();

    }

    @Then("^user verifies that checkout page is opened$")
    public void userVerifiesThatCheckoutPageIsOpened() throws Throwable {
        assertTrue(driver.getCurrentUrl().contains("mbuy"));
    }

    @When("^user click on \"([^\"]*)\"$")
    public void userClickOn(String arg0) throws Throwable {
        resultPage.paginationPageByNumber(arg0).click();
        waitForPageToLoad();
    }

    @Given("^logout if user is logged in$")
    public void logoutIfUserIsLoggedIn() throws Throwable {
        if (!topMenu.iSignInLinkDisplayed()) {
            userLoggedOut();
        }
    }
}
