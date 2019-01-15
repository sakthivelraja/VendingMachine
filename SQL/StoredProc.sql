USE [VendingMachine]
GO

/****** Object:  StoredProcedure [dbo].[usp_buyProduct]    Script Date: 1/14/2019 5:57:19 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[usp_buyProduct] 
	-- Add the parameters for the stored procedure here
	@productNm as varchar(100)
	,@actualAmt as money
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	DECLARE @change as money
	DECLARE @tenderAmt as money
    -- Insert statements for procedure here
	if ((select IsAvailable from [dbo].[ProductMaster] where ProductName=@productNm) > 0)
	begin
	SET @tenderAmt = (select price from [dbo].[ProductMaster] where ProductName=@productNm)
	SET @change = @actualAmt - @tenderAmt

	if(@change>=0)
	begin
	update [dbo].[ProductMaster] set Quantity = Quantity-1 where ProductName=@productNm

	if((select quantity from [dbo].[ProductMaster] where ProductName=@productNm) = 0)
	begin
	update [dbo].[ProductMaster] set IsAvailable=0 where ProductName=@productNm
	end

	SELECT productname, @change AS 'CHANGE', '1' AS 'STATUS' from [dbo].[ProductMaster] where ProductName=@productNm
	end
	else
	Select 'NOT ENOUGH MONEY TO BUY' AS 'Message', @actualAmt AS 'CHANGE', '0' AS 'STATUS'
	
	
	end
	else
	Select 'PRODUCT SOLD OUT' AS 'Message',@actualAmt AS 'CHANGE', '0' AS 'STATUS'
END

GO


