SELECT Person.firstName AS firstName, Person.lastName AS lastName, Address.city, Address.state 
FROM Person LEFT JOIN Address
ON Person.personId = Address.personId