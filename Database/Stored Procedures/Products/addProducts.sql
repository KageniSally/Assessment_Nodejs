CREATE OR ALTER PROCEDURE addProducts(@Id VARCHAR(255),
@Name VARCHAR(255),
@Description VARCHAR(255),
@Price INT)
AS
BEGIN
INSERT INTO  Products VALUES(@Id,@Name,@Description,@Price)
END 