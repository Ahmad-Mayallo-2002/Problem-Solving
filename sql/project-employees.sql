SELECT p.project_id, AVG(e.experience_years)::NUMERIC(10,2) AS average_years
FROM Project p
JOIN Employee e
ON e.employee_id = p.employee_id
GROUP BY p.project_id;