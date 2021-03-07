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
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `Review_ID` int NOT NULL AUTO_INCREMENT,
  `User_ID` int NOT NULL,
  `Town_ID` int NOT NULL,
  `Review_Rate` enum('1','2','3','4','5') NOT NULL,
  `Review_Advising` varchar(150) DEFAULT NULL,
  `Review_Safety_Rate` enum('1','2','3','4','5') DEFAULT NULL,
  `Review_Creation_Date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Review_ID`),
  KEY `User_ID` (`User_ID`),
  KEY `Town_ID` (`Town_ID`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_ID`),
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`Town_ID`) REFERENCES `town` (`Town_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,3,'5','No te puedes perder el tour del maestro tequilero, podrás conocer los paisajes y las tequileras. No olvides usar protector solar y un sombrero','5','2021-03-07 01:23:46'),(2,3,1,'4','Tu primer parada sin duda debe ser el Parián, podrás disfrutar de música, bebidas y artesanías. No olvides tomarte una foto en Andador independencia','5','2021-03-07 01:23:46'),(3,5,4,'4','Comerse un helado en los muelles mientras el viento sopla no tiene precio. ¿Qué onda con el cocodrilo de metal que pusieron en el centro? jaja','5','2021-03-07 01:23:46'),(4,4,6,'5','Un pueblo fantasma por excelencia, te sientes como en una película. Entrar a las minas es una experiencia emocionante','5','2021-03-07 01:23:46'),(5,8,9,'4','Lugar muy interesante en especial los recorridos en áreas Tarahumaras','4','2021-03-07 01:23:46'),(6,9,7,'3','Bonito pero con clima muy incomodo','3','2021-03-07 01:23:46'),(7,12,10,'5','Exquisito clima y gastronomía. Las playas de Oaxaca son sin dudarlo, las mejores del país','5','2021-03-07 01:23:46');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
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
