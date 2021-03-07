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
-- Table structure for table `town_dishes`
--

DROP TABLE IF EXISTS `town_dishes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `town_dishes` (
  `Town_ID` int NOT NULL,
  `Town_Dishes_ID` int NOT NULL,
  `Town_Dishes` varchar(100) NOT NULL,
  PRIMARY KEY (`Town_Dishes_ID`),
  KEY `Town_ID` (`Town_ID`),
  CONSTRAINT `town_dishes_ibfk_1` FOREIGN KEY (`Town_ID`) REFERENCES `town` (`Town_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `town_dishes`
--

LOCK TABLES `town_dishes` WRITE;
/*!40000 ALTER TABLE `town_dishes` DISABLE KEYS */;
INSERT INTO `town_dishes` VALUES (1,1,'Carne en su jugo'),(2,2,'Pacholas'),(3,3,'Birria'),(4,4,'Caldo michi'),(5,5,'Caldo de zorra'),(6,6,'Colonche'),(7,7,'Chile con queso'),(8,8,'Tostada de lomo de cerdo'),(9,9,'Caldillo de carne seca'),(10,10,'Mariscos'),(11,11,'Mole'),(12,12,'Enchiladas Juquileñas');
/*!40000 ALTER TABLE `town_dishes` ENABLE KEYS */;
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
