$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search/logged_in_user_test.feature");
formatter.feature({
  "line": 1,
  "name": "Logged in user tests",
  "description": "",
  "id": "logged-in-user-tests",
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
  "duration": 4640609410,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.loggedInUser()"
});
formatter.result({
  "duration": 11069962910,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User can navigate to the next page",
  "description": "",
  "id": "logged-in-user-tests;user-can-navigate-to-the-next-page",
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
  "duration": 99754818,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.iPerfomSearch()"
});
formatter.result({
  "duration": 4734273651,
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
  "duration": 32834150,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.userVerifiesThatPreviusPageArrowUnavailable()"
});
formatter.result({
  "duration": 26005942,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.userSelectTheLinkToTheNextPage()"
});
formatter.result({
  "duration": 5150409144,
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
  "duration": 33833158,
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
  "duration": 1805503361,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.loggedInUser()"
});
formatter.result({
  "duration": 34998934,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User can add single product to card",
  "description": "",
  "id": "logged-in-user-tests;user-can-add-single-product-to-card",
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
  "duration": 216348443,
  "status": "passed"
});
formatter.match({
  "location": "BaseStepDef.iPerfomSearch()"
});
