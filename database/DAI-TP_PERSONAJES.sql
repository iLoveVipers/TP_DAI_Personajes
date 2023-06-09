USE [master]
GO
/****** Object:  Database [DAI-TP_PERSONAJES]    Script Date: 15/6/2023 09:44:03 ******/
CREATE DATABASE [DAI-TP_PERSONAJES]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DAI-TP_PERSONAJES', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI-TP_PERSONAJES.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DAI-TP_PERSONAJES_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI-TP_PERSONAJES_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DAI-TP_PERSONAJES].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET ARITHABORT OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET RECOVERY FULL 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET  MULTI_USER 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'DAI-TP_PERSONAJES', N'ON'
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET QUERY_STORE = OFF
GO
USE [DAI-TP_PERSONAJES]
GO
/****** Object:  User [alumno]    Script Date: 15/6/2023 09:44:03 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Peliserie]    Script Date: 15/6/2023 09:44:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Peliserie](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](250) NULL,
	[Titulo] [varchar](50) NOT NULL,
	[Fecha_Creacion] [date] NOT NULL,
	[Calificacion] [int] NOT NULL,
 CONSTRAINT [PK_Peli_Serie] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje]    Script Date: 15/6/2023 09:44:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](250) NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Edad] [int] NOT NULL,
	[Peso] [int] NOT NULL,
	[Historia] [varchar](300) NOT NULL,
 CONSTRAINT [PK_Personaje] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje_Peliserie]    Script Date: 15/6/2023 09:44:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje_Peliserie](
	[fk_IdPersonaje] [int] NOT NULL,
	[fk_IdPeliSerie] [int] NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Peliserie] ON 

INSERT [dbo].[Peliserie] ([Id], [Imagen], [Titulo], [Fecha_Creacion], [Calificacion]) VALUES (2, NULL, N'La bella durmiente', CAST(N'1959-07-09' AS Date), 4)
INSERT [dbo].[Peliserie] ([Id], [Imagen], [Titulo], [Fecha_Creacion], [Calificacion]) VALUES (6, NULL, N'La sirenita', CAST(N'1989-12-07' AS Date), 7)
INSERT [dbo].[Peliserie] ([Id], [Imagen], [Titulo], [Fecha_Creacion], [Calificacion]) VALUES (7, NULL, N'La princesa y el sapo', CAST(N'2010-10-01' AS Date), 4)
INSERT [dbo].[Peliserie] ([Id], [Imagen], [Titulo], [Fecha_Creacion], [Calificacion]) VALUES (8, N'', N'La bella y la bestia', CAST(N'1991-07-09' AS Date), 8)
SET IDENTITY_INSERT [dbo].[Peliserie] OFF
GO
SET IDENTITY_INSERT [dbo].[Personaje] ON 

INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (1, NULL, N'Bella', 17, 55, N'Una chica inteligente que se enamora de Bestia')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (2, NULL, N'Bestia', 20, 90, N'Un principe emburjado que se enamora de Bella')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (3, NULL, N'Aurora', 16, 55, N'Una princesa hechizada por una bruja, cuyo hechizo solo se rompe con el beso de Phillip')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (4, NULL, N'Phillip', 20, 75, N'Le da un beso a la princesa mientras duerme')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (5, NULL, N'Malefica', 38, 60, N'Bruja que hechiza a Aurora')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (6, NULL, N'Tiana', 19, 60, N'Quiere abrir su propio restaurante pero se vuelve un sapo')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (7, NULL, N'Naveen', 21, 80, N'Principe carismático que se enamora de Tiana')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (8, NULL, N'Ariel', 16, 55, N'Sirena que le gustan los humanos. Y Eric.')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (9, NULL, N'Eric', 18, 75, N'Marinero que se enamora de Ariel.')
SET IDENTITY_INSERT [dbo].[Personaje] OFF
GO
INSERT [dbo].[Personaje_Peliserie] ([fk_IdPersonaje], [fk_IdPeliSerie]) VALUES (8, 6)
INSERT [dbo].[Personaje_Peliserie] ([fk_IdPersonaje], [fk_IdPeliSerie]) VALUES (9, 6)
INSERT [dbo].[Personaje_Peliserie] ([fk_IdPersonaje], [fk_IdPeliSerie]) VALUES (1, 8)
INSERT [dbo].[Personaje_Peliserie] ([fk_IdPersonaje], [fk_IdPeliSerie]) VALUES (2, 8)
INSERT [dbo].[Personaje_Peliserie] ([fk_IdPersonaje], [fk_IdPeliSerie]) VALUES (3, 2)
INSERT [dbo].[Personaje_Peliserie] ([fk_IdPersonaje], [fk_IdPeliSerie]) VALUES (4, 2)
INSERT [dbo].[Personaje_Peliserie] ([fk_IdPersonaje], [fk_IdPeliSerie]) VALUES (5, 2)
INSERT [dbo].[Personaje_Peliserie] ([fk_IdPersonaje], [fk_IdPeliSerie]) VALUES (6, 7)
INSERT [dbo].[Personaje_Peliserie] ([fk_IdPersonaje], [fk_IdPeliSerie]) VALUES (7, 7)
GO
ALTER TABLE [dbo].[Personaje_Peliserie]  WITH CHECK ADD  CONSTRAINT [FK_Personaje_PeliSerie_Peli_Serie] FOREIGN KEY([fk_IdPeliSerie])
REFERENCES [dbo].[Peliserie] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Personaje_Peliserie] CHECK CONSTRAINT [FK_Personaje_PeliSerie_Peli_Serie]
GO
ALTER TABLE [dbo].[Personaje_Peliserie]  WITH CHECK ADD  CONSTRAINT [FK_Personaje_PeliSerie_Personaje] FOREIGN KEY([fk_IdPersonaje])
REFERENCES [dbo].[Personaje] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Personaje_Peliserie] CHECK CONSTRAINT [FK_Personaje_PeliSerie_Personaje]
GO
USE [master]
GO
ALTER DATABASE [DAI-TP_PERSONAJES] SET  READ_WRITE 
GO
