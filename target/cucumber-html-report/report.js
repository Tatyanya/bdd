$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search/search_examples.feature");
formatter.feature({
  "line": 1,
  "name": "Demo examples",
  "description": "",
  "id": "demo-examples",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to site and switch site to English",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Loggged in user",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseStepDef.switchLocaleToEnglish()"
});
formatter.result({
  "duration": 4421886441,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.loggedInUser()"
});
formatter.result({
  "duration": 11015890472,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User can navigate to the next page",
  "description": "",
  "id": "demo-examples;user-can-navigate-to-the-next-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I set search request \"iPhone 4S\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I perfom search",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user verifies that page \"1\" is selected",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user verifies that previus page arrow unavailable",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user select the link to the next page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user verifies that page \"2\" is selected",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 4S",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.iSetSearchRequest(String)"
});
formatter.result({
  "duration": 172681077,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.iPerfomSearch()"
});
formatter.result({
  "duration": 5468081633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "BaseStepDef.userVerifiesThatHeIsOnFirstPage(String)"
});
formatter.result({
  "duration": 36512999,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.userVerifiesThatPreviusPageArrowUnavailable()"
});
formatter.result({
  "duration": 26425108,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.userSelectTheLinkToTheNextPage()"
});
formatter.result({
  "duration": 3893316913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "BaseStepDef.userVerifiesThatHeIsOnFirstPage(String)"
});
formatter.result({
  "duration": 27849055,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to site and switch site to English",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Loggged in user",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseStepDef.switchLocaleToEnglish()"
});
formatter.result({
  "duration": 1746971789,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.loggedInUser()"
});
formatter.result({
  "duration": 32048414,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User can add single product to card",
  "description": "",
  "id": "demo-examples;user-can-add-single-product-to-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I set search request \"iPhone 4S\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I perfom search",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user select item \"1\" from results list",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user click to buy now button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user verifies that checkout page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 4S",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.iSetSearchRequest(String)"
});
formatter.result({
  "duration": 170991583,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.iPerfomSearch()"
});
formatter.result({
  "duration": 3562832434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "BaseStepDef.userSelectItemFromResultsList(String)"
});
formatter.result({
  "duration": 4671434321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy now",
      "offset": 14
    }
  ],
  "location": "BaseStepDef.userClickToBuyNowButton(String)"
});
formatter.result({
  "duration": 58302906,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027u-flL\u0027]/a\"}\n  (Session info: chrome\u003d52.0.2743.116)\n  (Driver info: chromedriver\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 18 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027EPBYMINW4255\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_71\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b), userDataDir\u003dC:\\Users\\Tatyana_Korobitsina\\AppData\\Local\\Temp\\scoped_dir14848_17713}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d52.0.2743.116, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 0ee77fca468c5c19a0b5f96250ad034e\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027u-flL\u0027]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:490)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat search.pages.ProductPage.buyItNowButton(ProductPage.java:15)\r\n\tat search.steps.BaseStepDef.userClickToBuyNowButton(BaseStepDef.java:97)\r\n\tat ✽.And user click to buy now button(search/search_examples.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BaseStepDef.userVerifiesThatCheckoutPageIsOpened()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 21,
      "value": "# Then  user go to crd and verify count of items"
    },
    {
      "line": 22,
      "value": "#Then user verifies that results displayed"
    }
  ],
  "line": 24,
  "name": "User can add single product to card",
  "description": "",
  "id": "demo-examples;user-can-add-single-product-to-card",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I set search request \"\u003crequest\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I perfom search",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user select item \"\u003citem\u003e\" from results list",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user click to buy now button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user verifies that checkout page is opened",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "demo-examples;user-can-add-single-product-to-card;",
  "rows": [
    {
      "cells": [
        "request",
        "item"
      ],
      "line": 32,
      "id": "demo-examples;user-can-add-single-product-to-card;;1"
    },
    {
      "cells": [
        "iPhone 4S",
        "2"
      ],
      "line": 33,
      "id": "demo-examples;user-can-add-single-product-to-card;;2"
    },
    {
      "cells": [
        "Samsung Galaxy",
        "3"
      ],
      "line": 34,
      "id": "demo-examples;user-can-add-single-product-to-card;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to site and switch site to English",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Loggged in user",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseStepDef.switchLocaleToEnglish()"
});
formatter.result({
  "duration": 1506574046,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.loggedInUser()"
});
formatter.result({
  "duration": 32413381,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User can add single product to card",
  "description": "",
  "id": "demo-examples;user-can-add-single-product-to-card;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I set search request \"iPhone 4S\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I perfom search",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user select item \"2\" from results list",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user click to buy now button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user verifies that checkout page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 4S",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.iSetSearchRequest(String)"
});
formatter.result({
  "duration": 186545952,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.iPerfomSearch()"
});
formatter.result({
  "duration": 3170713208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "BaseStepDef.userSelectItemFromResultsList(String)"
});
formatter.result({
  "duration": 2772767989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy now",
      "offset": 14
    }
  ],
  "location": "BaseStepDef.userClickToBuyNowButton(String)"
});
formatter.result({
  "duration": 5322732630,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.userVerifiesThatCheckoutPageIsOpened()"
});
formatter.result({
  "duration": 9897710,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to site and switch site to English",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Loggged in user",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseStepDef.switchLocaleToEnglish()"
});
formatter.result({
  "duration": 1507647137,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.loggedInUser()"
});
formatter.result({
  "duration": 133667511,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User can add single product to card",
  "description": "",
  "id": "demo-examples;user-can-add-single-product-to-card;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I set search request \"Samsung Galaxy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I perfom search",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user select item \"3\" from results list",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user click to buy now button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user verifies that checkout page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.iSetSearchRequest(String)"
});
formatter.result({
  "duration": 93077023,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.iPerfomSearch()"
});
formatter.result({
  "duration": 5734637655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "BaseStepDef.userSelectItemFromResultsList(String)"
});
formatter.result({
  "duration": 5351922248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy now",
      "offset": 14
    }
  ],
  "location": "BaseStepDef.userClickToBuyNowButton(String)"
});
formatter.result({
  "duration": 3520448223,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.userVerifiesThatCheckoutPageIsOpened()"
});
formatter.result({
  "duration": 5254490,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Running a Full Text Quick Search",
  "description": "",
  "id": "demo-examples;running-a-full-text-quick-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "I set search request \"\u003crequest\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I perfom search",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the term query \"\u003crequest\u003e\" should be the first in the Search Result grid",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "demo-examples;running-a-full-text-quick-search;",
  "rows": [
    {
      "cells": [
        "request"
      ],
      "line": 42,
      "id": "demo-examples;running-a-full-text-quick-search;;1"
    },
    {
      "cells": [
        "iPhone 4S"
      ],
      "line": 43,
      "id": "demo-examples;running-a-full-text-quick-search;;2"
    },
    {
      "cells": [
        "Samsung Galaxy"
      ],
      "line": 44,
      "id": "demo-examples;running-a-full-text-quick-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to site and switch site to English",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Loggged in user",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseStepDef.switchLocaleToEnglish()"
});
formatter.result({
  "duration": 1636179141,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.loggedInUser()"
});
formatter.result({
  "duration": 40037907,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Running a Full Text Quick Search",
  "description": "",
  "id": "demo-examples;running-a-full-text-quick-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "I set search request \"iPhone 4S\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I perfom search",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the term query \"iPhone 4S\" should be the first in the Search Result grid",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 4S",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.iSetSearchRequest(String)"
});
formatter.result({
  "duration": 176408672,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.iPerfomSearch()"
});
formatter.result({
  "duration": 4871143438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 4S",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.theTermQueryShouldBeTheFirstInTheSearchResultGrid(String)"
});
formatter.result({
  "duration": 44653546,
  "error_message": "java.lang.AssertionError: \nExpected: a string containing \"iPhone 4S\"\n     but: was \"Apple iPhone 4s - 32GB - Black (Unlocked) Smartphone\"\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:865)\r\n\tat org.junit.Assert.assertThat(Assert.java:832)\r\n\tat search.steps.BaseStepDef.theTermQueryShouldBeTheFirstInTheSearchResultGrid(BaseStepDef.java:40)\r\n\tat ✽.Then the term query \"iPhone 4S\" should be the first in the Search Result grid(search/search_examples.feature:39)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to site and switch site to English",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Loggged in user",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseStepDef.switchLocaleToEnglish()"
});
formatter.result({
  "duration": 2048227523,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.loggedInUser()"
});
formatter.result({
  "duration": 181144577,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Running a Full Text Quick Search",
  "description": "",
  "id": "demo-examples;running-a-full-text-quick-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "I set search request \"Samsung Galaxy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I perfom search",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the term query \"Samsung Galaxy\" should be the first in the Search Result grid",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.iSetSearchRequest(String)"
});
formatter.result({
  "duration": 179455726,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.iPerfomSearch()"
});
formatter.result({
  "duration": 10731709585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.theTermQueryShouldBeTheFirstInTheSearchResultGrid(String)"
});
formatter.result({
  "duration": 48602432,
  "status": "passed"
});
});