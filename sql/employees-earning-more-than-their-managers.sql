SELECT Employee.name 
AS Employee 
FROM Employee 
JOIN Employee m 
ON m.id = Employee.managerId 
WHERE Employee.salary > m.salary;