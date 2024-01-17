

export default class LoginPage {
	static visitPage(parameter) {
		cy.visit(parameter)
	}

	static fillLoginData(activeUser) {
		cy.get('[placeholder="Username"]:visible').type(activeUser)
		cy.get('[placeholder="Username"]:visible').type(password)
	}
}