CREATE OR ALTER PROCEDURE getProduct(@Id VARCHAR (255))
AS
BEGIN
SELECT * FROM Products WHERE Id=@Id
END