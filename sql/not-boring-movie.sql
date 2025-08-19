SELECT *
FROM Cinema c
WHERE description != 'boring' AND (id - 1) % 2 = 0
ORDER BY rating DESC;