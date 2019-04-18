describe( 'Testing WebApp Main Page', function() {
  it( 'sucessfully loads the baseurl', function() {
    cy.visit( 'http://localhost:8080' )
  })

  it('successfully finds the header', function(){
  	cy.get('.top > tbody > tr > td > h2').should('have.text','ENPM614')
  })

  it('successfully finds the title', function(){
  	cy.get('.items > tbody > :nth-child(1) > td').should('have.text','Assignment 3 Toy Web App')
  })

  it('successfully finds the math link', function(){
  	cy.get('.items').find('a')
  	.first().contains('Math')
  	.should('have.attr','href')
	
  })

   it('successfully visits the math link',function(){
  	cy.get('.items').find('a')
  	.first().contains('Math').click()
    
    cy.url().should('include', '/math.jsp') 
  	 
  	cy.visit( 'http://localhost:8080' )
 
  })

  it('successfully finds the form link', function(){
  	cy.get('.items').find('a')
  	.last().contains('Form')
  	.should('have.attr','href')
  })

  it('successfully visits the form link',function(){
  	cy.get('.items').find('a')
  	.last().contains('Form').click()

    cy.url().should('include', '/form.jsp') 
	   
  	cy.visit( 'http://localhost:8080' )
  })

  it('successfully finds the footer', function(){
    cy.get('.bottom > tbody > tr > td').should('have.text','Copyright © 2010 - 2018 ANepaul')
  })


}) 