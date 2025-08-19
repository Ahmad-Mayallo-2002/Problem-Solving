UPDATE Salary s
SET sex = CASE
        WHEN sex = 'f' THEN 'm'
        WHEN sex = 'm' THEN 'f'
        END;