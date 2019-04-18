describe( 'Testing Math Form Page', function() {
  it( 'sucessfully loads the baseurl for math page', function() {
    cy.visit( 'http://localhost:8080/math.jsp' )
	})

  it('sucessfully finds the title', function() {

  	cy.get('.items > tbody > :nth-child(1) > td > h2').should('have.text','Assignment 3 Toy Web App - Math')
  })

  it('sucessfully finds the math operation link', function() {

  	cy.get('.items').find('a')
  	.contains('http://localhost:8080/math.jsp?param1=10&operation=plus&param2=10')
  	.should('have.attr','href')
  })

  it('sucessfully visits the math operation link', function() {

  	cy.get('.items').find('a')
  	.contains('http://localhost:8080/math.jsp?param1=10&operation=plus&param2=10')
  	.click()
  	cy.get('input').should('have.value', '20')
	 

  })

  it('sucessfully verifies first parameter', function() {

  	cy.visit('http://localhost:8080/math.jsp?param1=ParamOne&operation=plus&param2=10')
  	cy.get('input').should('have.value', 'param1 and param2 must be integers...')
  	 

	cy.visit('http://localhost:8080/math.jsp?param1=2.5&operation=plus&param2=10')
  	cy.get('input').should('have.value', 'param1 and param2 must be integers...')
  	 

  })

it('sucessfully verifies second parameter', function() {

  	cy.visit('http://localhost:8080/math.jsp?param1=10&operation=plus&param2=ParamTwo')
  	cy.get('input').should('have.value', 'param1 and param2 must be integers...')
  	 

	cy.visit('http://localhost:8080/math.jsp?param1=10&operation=plus&param2=2.5')
  	cy.get('input').should('have.value', 'param1 and param2 must be integers...')
  	 

  })

it('sucessfully verifies both parameters', function() {

  	cy.visit('http://localhost:8080/math.jsp?param1=ParamOne&operation=plus&param2=ParamTwo')
  	cy.get('input').should('have.value', 'param1 and param2 must be integers...')
  	 

	cy.visit('http://localhost:8080/math.jsp?param1=2.5&operation=plus&param2=2.5')
  	cy.get('input').should('have.value', 'param1 and param2 must be integers...')
  	 

  })

it('successfully gives an error response if first parameter is null', function() {

  cy.visit('http://localhost:8080/math.jsp?param1=&operation=plus&param2=10')
  cy.get('input').should('have.value', 'Usage: http://localhost:8080/math.jsp?param1=XX&operation=X&param2=XX')
   

})

it('successfully gives an error response if second parameter is null', function() {

  cy.visit('http://localhost:8080/math.jsp?param1=10&operation=plus&param2=')
  cy.get('input').should('have.value', 'Usage: http://localhost:8080/math.jsp?param1=XX&operation=X&param2=XX')
   

})

it('successfully verifies minus operation', function() {

  cy.visit('http://localhost:8080/math.jsp?param1=10&operation=minus&param2=10')
  cy.get('input').should('have.value', '0')
   

})

it('successfully tests for an invalid opertaion', function() {

  cy.visit('http://localhost:8080/math.jsp?param1=10&operation=/&param2=')
  cy.get('input').should('have.value', 'Usage: http://localhost:8080/math.jsp?param1=XX&operation=X&param2=XX')
   

  cy.visit('http://localhost:8080/math.jsp?param1=10&operation=multiply&param2=')
  cy.get('input').should('have.value', 'Usage: http://localhost:8080/math.jsp?param1=XX&operation=X&param2=XX')
   

  cy.visit('http://localhost:8080/math.jsp?param1=10&operation=add&param2=')
  cy.get('input').should('have.value', 'Usage: http://localhost:8080/math.jsp?param1=XX&operation=X&param2=XX')
   
  
})

it('successfully tests for a null opertaion', function() {

  cy.visit('http://localhost:8080/math.jsp?param1=10&operation=/&param2=')
  cy.get('input').should('have.value', 'Usage: http://localhost:8080/math.jsp?param1=XX&operation=X&param2=XX')
   
  
})
 

})