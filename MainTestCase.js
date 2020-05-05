var loginObj = require("./locatorForLoginPage.js")
var CRUDobj = require("./locatorsForLoggedInUserPage")
var newUserObj = require("./createNewUserPage")
describe('CompleteWebSiteAutomation',function() {
    it('Login Into WebPage',function() {
      browser.get("http://cafetownsend-angular-rails.herokuapp.com/login");
      loginObj.loginPageURL();
      loginObj.UserName.sendKeys("Luke");
      loginObj.Password.sendKeys("Skywalker");
      loginObj.buttonSubmit.click();
      element(by.id("greetings")).getText().then(function(text)  {
        expect(text).toBe("Hello Luke");
      })
    })

    it('Create a new user',function() {
        CRUDobj.createButton.click();
        newUserObj.newUserFirstName.sendKeys("Amith");
        newUserObj.newUserLastName.sendKeys("Trivedi");
        newUserObj.newUserEmail.sendKeys("amitTri@ymail.com");
        newUserObj.startDate.sendKeys("2021-07-17");
        newUserObj.buttonSubmit.click();
        element.all(by.id("employee-list-container")).each(function(item) {
            item.element(by.id("employee-list")).getText().then(function(value) {
                expect(value).toMatch("Amith Trivedi");
            })
        })
    })

    it('Modify the user details',function() {
        element(by.cssContainingText('li.ng-scope.ng-binding','Amith Trivedi')).click();
        CRUDobj.editButton.click();
        newUserObj.newUserFirstName.clear();
        newUserObj.newUserFirstName.sendKeys("Laxman");
        newUserObj.buttonSubmit.click();
        element.all(by.id("employee-list-container")).each(function(item) {
            item.element(by.id("employee-list")).getText().then(function(value) {
                expect(value).toMatch("Laxman Trivedi");
            })
        })
    })

    it('Delete user',function() {
        element(by.cssContainingText('li.ng-scope.ng-binding','Amith Trivedi')).click();
        CRUDobj.deleteButton.click();
        var alert = browser.switchTo().alert();
        alert.accept();
    })

    it('Logout From account', function(){
        CRUDobj.logOutButton.click();
        loginObj.buttonSubmit.getText().then(function(text) {
            expect(text).toBe("Login");
        })
    })
})