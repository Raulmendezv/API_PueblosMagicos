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
-- Table structure for table `town_attractions`
--

DROP TABLE IF EXISTS `town_attractions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `town_attractions` (
  `Town_ID` int NOT NULL,
  `Town_Attraction_ID` int NOT NULL,
  `Town_Attraction` varchar(120) NOT NULL,
  PRIMARY KEY (`Town_Attraction_ID`),
  KEY `Town_ID` (`Town_ID`),
  CONSTRAINT `town_attractions_ibfk_1` FOREIGN KEY (`Town_ID`) REFERENCES `town` (`Town_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `town_attractions`
--

LOCK TABLES `town_attractions` WRITE;
/*!40000 ALTER TABLE `town_attractions` DISABLE KEYS */;
INSERT INTO `town_attractions` VALUES (1,1,'Andador Independencia'),(2,2,'Parroquia de la Asunción en el Centro Histórico'),(3,3,'Tren Tequila Express o el José Cuervo Express'),(4,4,'Laguna de Yuriria'),(5,5,'Hacienda de Jalpa de Cánovas'),(6,6,'Mina de los Cinco Señores'),(7,7,'Hacienda San Miguel'),(8,8,'Zona arqueológica Paquimé'),(9,9,'Barrancas del Cobre'),(10,10,'Centro Mexicano de la Tortuga'),(11,11,'Zona Arqueológica de Yagul y Mitla'),(12,12,'Santuario Mariano de la Inmaculada Virgen de Juquila');
/*!40000 ALTER TABLE `town_attractions` ENABLE KEYS */;
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
