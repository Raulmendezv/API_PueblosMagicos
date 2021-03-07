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
-- Table structure for table `town_ethnics`
--

DROP TABLE IF EXISTS `town_ethnics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `town_ethnics` (
  `Town_ID` int NOT NULL,
  `Town_Ethnics_ID` int NOT NULL,
  `Town_Ethnics` varchar(30) NOT NULL,
  PRIMARY KEY (`Town_Ethnics_ID`),
  KEY `Town_ID` (`Town_ID`),
  CONSTRAINT `town_ethnics_ibfk_1` FOREIGN KEY (`Town_ID`) REFERENCES `town` (`Town_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `town_ethnics`
--

LOCK TABLES `town_ethnics` WRITE;
/*!40000 ALTER TABLE `town_ethnics` DISABLE KEYS */;
INSERT INTO `town_ethnics` VALUES (3,1,'Chichimecas'),(3,2,'Otomíes'),(3,3,'Toltecas'),(3,4,'Nahuatlacas'),(7,5,'Tarahumaras'),(7,6,'Guarojíos'),(7,7,'Tepehuanes'),(7,8,'Pimas'),(8,9,'Tarahumaras'),(8,10,'Guarojíos'),(8,11,'Tepehuanes'),(8,12,'Pimas'),(9,13,'Tarahumaras'),(9,14,'Guarojíos'),(9,15,'Tepehuanes'),(9,16,'Pimas'),(10,17,'Mariscos'),(10,18,'Náhuatl'),(11,19,'Zapotecos'),(11,20,'Mixtecos'),(12,21,'Chatinos');
/*!40000 ALTER TABLE `town_ethnics` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-06 18:38:35
