function CRUDoperationPage() {
    this.createButton = element(by.id("bAdd"));
    this.editButton = element(by.id("bEdit"));
    this.deleteButton = element(by.id("bDelete"));
    this.logOutButton = element(by.cssContainingText('p.main-button','Logout'));
}
module.exports = new CRUDoperationPage();