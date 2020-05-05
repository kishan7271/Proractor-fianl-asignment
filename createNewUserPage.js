function createnewuser() {
    this.newUserFirstName = element(by.model("selectedEmployee.firstName"));
    this.newUserLastName = element(by.model("selectedEmployee.lastName"));
    this.startDate = element(by.model("selectedEmployee.startDate"));
    this.newUserEmail = element(by.model("selectedEmployee.email"));
    this.buttonSubmit = element(by.css("button[class='main-button']"));
}

module.exports = new createnewuser();