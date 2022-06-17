$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login to VirginGame Website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15660389800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "user should see login link on home page",
  "description": "",
  "id": "login-test;user-should-see-login-link-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should see login Link on Homepage.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 946695500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeLoginLinkOnHomepage()"
});
formatter.result({
  "duration": 454109300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cLog I[]\u003e but was:\u003cLog I[n]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.heartbingo.steps.LoginStep.iShouldSeeLoginLinkOnHomepage(LoginStep.java:23)\r\n\tat ✽.Then I should see login Link on Homepage.(login.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2735612800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 18,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "The username or password you entered is incorrect. Please try again."
      ],
      "line": 19,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "The username or password you entered is incorrect. Please try again."
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7967864800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"The username or password you entered is incorrect. Please try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 430419900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 981318900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 21077514300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 566777200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1031033800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 32
    }
  ],
  "location": "LoginStep.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 898266800,
  "status": "passed"
});
formatter.after({
  "duration": 1758097300,
  "status": "passed"
});
formatter.before({
  "duration": 7363059600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"The username or password you entered is incorrect. Please try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 450102100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 831925200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 21078251300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 562208900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1108403700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 32
    }
  ],
  "location": "LoginStep.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 1052712600,
  "status": "passed"
});
formatter.after({
  "duration": 1471722300,
  "status": "passed"
});
});