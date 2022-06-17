package uk.co.heartbingo.pages;

import org.testng.Reporter;
import uk.co.heartbingo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());


    public LoginPage() {
        PageFactory.initElements(driver, this);
    }


    @FindBy(id = "username")
    WebElement usernameField;

    @FindBy(id = "password")
    WebElement passwordField;

    @FindBy(name = "login_submit")
    WebElement loginButtonField;

    @FindBy(xpath = "//div[@class='login_errorMessageWrapper__2ZcGx']")
    WebElement errorTextField;


    @FindBy(xpath = "//iframe[@class='oneauth-iframe']")
    WebElement iframe;

    public void switchToIframe(WebElement element) {

        driver.switchTo().frame(element);
    }

    public void clickOnUserName(String email) {
        log.info("clickOnUserName : " + usernameField.toString());
        switchToIframe(iframe);
        sendTextToElement(usernameField, email);
        //Reporter.log("clickOnUserName " + usernameField.toString());
    }

    public void clickOnPassword(String password) {
        log.info("clickOnPassword : " + passwordField.toString());
        sendTextToElement(passwordField, password);
       // Reporter.log("clickOnPassword " + passwordField.toString());
    }

    public void clickOnLoginButton() {
        log.info("clickOnLoginButton : " + loginButtonField.toString());
        clickOnElement(loginButtonField);
        //Reporter.log("clickOnLoginButton " + loginButtonField.toString());
    }
    public String errorMessage(){
        log.info("errorMessage : " + errorTextField.toString());
       // Reporter.log("errorMessage " + errorTextField.toString());
      return   getTextFromElement(errorTextField);

    }
}






