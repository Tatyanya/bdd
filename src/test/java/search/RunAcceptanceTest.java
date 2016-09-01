package search;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.remote.DesiredCapabilities;
import search.selenium.BaseSelenium;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        plugin = {
                "pretty", "json:target/Cucumber.json",
                "html:target/cucumber-html-report"
        }
)
public class RunAcceptanceTest {
    @BeforeClass
    public static void initSelenium(){
        BaseSelenium.init();
    }
    @AfterClass
    public static void closeSelenium(){
        BaseSelenium.close();
    }
}
