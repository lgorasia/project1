package uk.co.heartbingo.steps;

import uk.co.heartbingo.pages.HomePage;
import uk.co.heartbingo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStep {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() throws InterruptedException {
        new HomePage().clickOnAccept();


    }

    @Then("^I should see login Link on Homepage\\.$")
    public void iShouldSeeLoginLinkOnHomepage() {
        String actualText = new HomePage().clickOnLogin();
        String expectedText = "Log I";
        Assert.assertEquals(expectedText, actualText);
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new LoginPage().clickOnUserName(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().clickOnPassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage) {
        String actualMessage = new LoginPage().errorMessage();
        String expectedMessage = errorMessage;
        Assert.assertEquals(expectedMessage, actualMessage);


    }
}
