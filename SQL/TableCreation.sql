USE [VendingMachine]
GO

/****** Object:  Table [dbo].[ProductMaster]    Script Date: 1/14/2019 5:50:12 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ProductMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [varchar](10) NULL,
	[Price] [money] NULL,
	[Quantity] [int] NULL,
	[IsAvailable] [bit] NULL
) ON [PRIMARY]
GO


