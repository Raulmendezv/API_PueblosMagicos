-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: pueblosmagicos
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `town`
--

DROP TABLE IF EXISTS `town`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `town` (
  `Town_ID` int NOT NULL AUTO_INCREMENT,
  `Town_Name` varchar(50) NOT NULL,
  `Town_Biome` varchar(20) NOT NULL,
  `Town_Weather` varchar(20) NOT NULL,
  `Town_Incorporation_Year` year NOT NULL,
  `Town_State` varchar(50) NOT NULL,
  PRIMARY KEY (`Town_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `town`
--

LOCK TABLES `town` WRITE;
/*!40000 ALTER TABLE `town` DISABLE KEYS */;
INSERT INTO `town` VALUES (1,'San Pedro Tlaquepaque','Urbano','Semicálido',2018,'Jalisco'),(2,'Lagos de Moreno','Valle','Semiseco',2012,'Jalisco'),(3,'Tequila','Valle','Subtropical',2003,'Jalisco'),(4,'Yuriria','Bosque','Semicálido',2012,'Guanajuato'),(5,'Jalpa de Canovas','Bosque','Subhúmedo',2012,'Guanajuato'),(6,'Mineral de Pozos','Semidesierto','Semiseco',2012,'Guanajuato'),(7,'Batopilas','Montaña','Semihúmedo',2012,'Chihuahua'),(8,'Casas Grandes','Desierto','Extremo',2015,'Chihuahua'),(9,'Creel','Sierra','Templado',2007,'Chihuahua'),(10,'Mazunte','Playa','Cálido',2015,'Oaxaca'),(11,'San Pablo Villa de Mitla','Valle','Seco',2015,'Oaxaca'),(12,'Santa Catarina Juquila','Bosque','Húmedo',2020,'Oaxaca');
/*!40000 ALTER TABLE `town` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-06 18:38:34
