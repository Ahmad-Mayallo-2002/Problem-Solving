SELECT Customers.name AS Customers
FROM Customers
FULL JOIN Orders
ON Customers.id = Orders.customerId 
WHERE Orders.customerId IS NULL;
