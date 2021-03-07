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
-- Table structure for table `town_festivities`
--

DROP TABLE IF EXISTS `town_festivities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `town_festivities` (
  `Town_ID` int NOT NULL,
  `Town_Festivities_ID` int NOT NULL,
  `Town_Festivities` varchar(120) NOT NULL,
  PRIMARY KEY (`Town_Festivities_ID`),
  KEY `Town_ID` (`Town_ID`),
  CONSTRAINT `town_festivities_ibfk_1` FOREIGN KEY (`Town_ID`) REFERENCES `town` (`Town_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `town_festivities`
--

LOCK TABLES `town_festivities` WRITE;
/*!40000 ALTER TABLE `town_festivities` DISABLE KEYS */;
INSERT INTO `town_festivities` VALUES (1,1,'Fiestas de San Pedro Tlaquepaque'),(2,2,'Fiestas a Nuestro Padre Jesús del Calvario'),(3,3,'Feria Nacional del Tequila'),(4,4,'Fiesta de la Preciosa Sangre de Cristo'),(5,5,'La Judea'),(6,6,'Señor de los Trabajos'),(7,7,'Fiestas Patronales de la Virgen del Carmen'),(8,8,'Cabalgata Binacional Villista'),(9,9,'Fiesta patronal de Cristo Rey'),(10,10,'Festival Internacional de Jazz'),(11,11,'Villa Mágica de Mitla'),(12,12,'Celebración de la Virgen de Juquila');
/*!40000 ALTER TABLE `town_festivities` ENABLE KEYS */;
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
