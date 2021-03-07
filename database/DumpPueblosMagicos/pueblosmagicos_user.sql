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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `User_ID` int NOT NULL AUTO_INCREMENT,
  `User_Password` varchar(50) NOT NULL,
  `User_Age` int NOT NULL,
  `User_Gender` enum('M','F','X') DEFAULT NULL,
  `User_State` varchar(50) NOT NULL,
  `User_Bio` varchar(150) DEFAULT NULL,
  `User_Username` varchar(30) NOT NULL,
  `User_Photo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'pass1',26,'F','Querétaro','Soy una persona a la que le encanta pueblear','Jane','https://cdn.pixabay.com/photo/2017/01/23/19/40/woman-2003647__340.jpg'),(2,'pass2',20,'M','San Luis','Viajar es mi pasión','Dawson','https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790__340.jpg'),(3,'pass3',19,'F','Jalisco','Persona atevida con hambre de conocer lugares nuevos','Andy','https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491__340.jpg'),(4,'leon95',26,'M','Guanajuato','Me gusta conocer la historia de los lugares','Arturo','shorturl.at/kvIX1'),(5,'irapuato1996',25,'M','Guanajuato','Fotografiar paisajes naturales es lo mío','Chris','shorturl.at/fyLSV'),(6,'vida2002',18,'M','Guanajuato','Me gusta el turismo de aventura y acampar','Yahir','shorturl.at/ipA89'),(7,'grufty295',27,'X','Campeche','Me encanta el cine local y aprender de otras culturas','Jupera','shorturl.at/wNSTU'),(8,'chihuahuita',42,'F','Guerrero','Amante de la comida, por eso me encanta viajar','Aritho','shorturl.at/fAMPX'),(9,'awadeuwusinewe',21,'F','Veracruz',NULL,'Favela','shorturl.at/bdfzH'),(10,'asd1',47,'M','Puebla','Me gusta programar, el café y salir de viaje','Toño','https://cdn.pixabay.com/photo/2016/02/19/10/56/man-1209494_1280.jpg'),(11,'asd2',21,'M','Ciudad de México','Me gusta leer, conocer nueva música y la cultura de mi país','David','https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg'),(12,'asd3',19,'F','Oaxaca','Soy de Oaxaca y mi festividad favorita es el Día de Todos los Santos y la Guelaguetza','Erika','https://cdn.pixabay.com/photo/2020/12/12/05/10/young-5824499_1280.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
