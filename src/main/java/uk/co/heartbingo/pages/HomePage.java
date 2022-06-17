package uk.co.heartbingo.pages;


import org.testng.Reporter;
import uk.co.heartbingo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "onetrust-accept-btn-handler")
    WebElement acceptField;


    @FindBy(xpath = "//a[contains(text(),'Log In')]")
    WebElement loginField;

    public String clickOnLogin() {
       // Reporter.log("clickOnLogin " + loginField.toString());
        log.info("clickOnLogin : " + loginField.toString());
        return getTextFromElement(loginField);
    }

    public void clickOnAccept() {
        log.info("clickOnAccept : " + acceptField.toString());
        clickOnElement(acceptField);

      //  Reporter.log("clickOnAccept " + acceptField.toString());
    }

    public void clickOnLoginLink() {

        log.info("clickOnLoginLink : " + loginField.toString());
        clickOnElement(loginField);
      //  Reporter.log("clickOnLoginLink " + loginField.toString());

    }

}
