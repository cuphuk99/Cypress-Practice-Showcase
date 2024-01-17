Feature: Practice Software Testing

    Scenario: I incpect search
        Given I log into page 
        And I inspect some data for search
        When I execute search
        Then Each result should contain search value
        When I click on '[data-test="search-reset"]'
        Then Page should look as it was at the begining 

    Scenario: I incpect URLs
        Given I log into page 
        And URL should contain 'practicesoftwaretesting.com'
        When I click on '[data-test="nav-contact"]'
        And URL should contain 'contact'
        When I click on '[data-test="nav-sign-in"]'
        And URL should contain 'login'
        Then I go thought each option for Categories
