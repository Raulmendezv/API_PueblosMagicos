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
-- Table structure for table `town_photos`
--

DROP TABLE IF EXISTS `town_photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `town_photos` (
  `Town_ID` int NOT NULL,
  `Town_Photo_ID` int NOT NULL,
  `Town_Photo` varchar(100) NOT NULL,
  PRIMARY KEY (`Town_Photo_ID`),
  KEY `Town_ID` (`Town_ID`),
  CONSTRAINT `town_photos_ibfk_1` FOREIGN KEY (`Town_ID`) REFERENCES `town` (`Town_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `town_photos`
--

LOCK TABLES `town_photos` WRITE;
/*!40000 ALTER TABLE `town_photos` DISABLE KEYS */;
INSERT INTO `town_photos` VALUES (1,1,'https://media.timeout.com/images/103928725/image.jpg'),(2,2,'https://www.mexicoenfotos.com/MX15099484704679.jpg'),(3,3,'https://www.gob.mx/cms/uploads/image/file/521316/Tequila-JALISCO-web.jpg'),(4,4,'shorturl.at/azDH8'),(5,5,'shorturl.at/bjDI1'),(6,6,'shorturl.at/cmBGY'),(7,7,'shorturl.at/eAGHU'),(8,8,'shorturl.at/yzLW4'),(9,9,'shorturl.at/ivDMT'),(10,10,'https://www.gob.mx/cms/uploads/article/main_image/85797/Oaxaca-Mitla-Zona-Arqueologica-web.jpg'),(11,11,'https://www.gob.mx/cms/uploads/article/main_image/85405/Oaxaca-Mazunte-Tortuguero-web.jpg'),(12,12,'https://www.gob.mx/cms/uploads/article/main_image/102846/foto__5_.JPG');
/*!40000 ALTER TABLE `town_photos` ENABLE KEYS */;
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
