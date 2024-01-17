/// <reference types="cypress" />
import { Before, Given, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage/LoginPage";

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from failing the test
	return false
})
var url = 'https://practicesoftwaretesting.com/';
var searchValue;
var arrayOfItems =[];
var arrayOfURLs = ['hand-tools', 'power-tools', 'other', 'special-tools', 'rentals']
Given('I log into page', () => {
    cy.visit(url)
	cy.wait(2000)
})

Given('I inspect some data for search', () => {
    cy.get('.card-title').each((el, index)=>{
		searchValue = el.text().trim();
		arrayOfItems.push(searchValue)
	})
})

Given('I execute search', () => {
    cy.get('[placeholder="Search"]').type(searchValue).type('{enter}')
	cy.wait(3000)
})

Given('Each result should contain search value', () => {
	cy.get('.card-title').should('contain', searchValue)
	cy.get('h3').should('contain', 'Searched for: '+searchValue)
})

Given('Page should look as it was at the begining', () => {
	cy.get('.card-title').each((el, index)=>{
		let tempVal = el.text().trim();
		finalListingCount = Cypress.$(el).length;
		expect(arrayOfItems[index]).to.eq(tempVal)
	})
})

Given('I go thought each option for Categories', () => {
    cy.get('[data-test="nav-categories"]').click()
	cy.get('.dropdown-menu').find('a').each((el, index)=>{
		cy.wrap(el).click()
		cy.url().should('contain', arrayOfURLs[index])
		cy.get('[data-test="nav-categories"]').click()
	})

})

Given('URL should contain {string}', (urlValue) => {
    cy.url().should('contain', urlValue);
})

When('I click on {string}', (selector) => {
    cy.get(selector).click()
	cy.wait(2000)
})

