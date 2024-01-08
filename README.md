# first you should run the serverside App. 
visual studio 2022, .netcore 7  + the DB . 


# the DB is in sql server, i have attached a script, 
you can run it in sql server to build a table

# here is a scipt generated for InvoiceTable DataBase, you should Run 
in Microsoft Sql Server or build it again manually: 

USE [Invoices]
GO
/****** Object:  Table [dbo].[InvoicesTable]    Script Date: 1/8/2024 7:35:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InvoicesTable](
	[Id] [nchar](9) NOT NULL,
	[Status] [nchar](50) NULL,
	[Amount] [int] NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_InvoicesTable] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

