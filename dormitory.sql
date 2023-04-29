-- MariaDB dump 10.19  Distrib 10.11.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: dormitory
-- ------------------------------------------------------
-- Server version	10.11.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_absent`
--

DROP TABLE IF EXISTS `t_absent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_absent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `building_id` int(11) NOT NULL,
  `dormitory_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `operator_id` int(11) NOT NULL,
  `create_date` datetime NOT NULL,
  `reason` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_absent`
--

LOCK TABLES `t_absent` WRITE;
/*!40000 ALTER TABLE `t_absent` DISABLE KEYS */;
INSERT INTO `t_absent` VALUES
(1,1,40,123,2,'1971-11-25 04:23:01','请假'),
(2,1,21,53,2,'1973-10-17 07:19:06','请假'),
(3,2,50,74,1,'1973-10-17 20:32:10','请假'),
(4,1,16,261,2,'1985-12-30 06:05:03','请假'),
(5,2,18,106,1,'1997-04-11 03:03:36','请假'),
(6,1,14,118,2,'1996-05-31 03:00:24','请假'),
(7,1,47,258,2,'2004-02-24 13:18:50','请假'),
(8,1,97,331,2,'1990-05-01 03:33:57','请假'),
(9,2,77,346,1,'1986-10-27 07:58:54','请假'),
(10,2,60,327,1,'2012-07-31 14:50:44','请假'),
(11,2,38,86,2,'2013-03-22 22:42:17','请假'),
(12,1,58,215,1,'2019-06-29 08:22:00','请假'),
(13,2,19,234,1,'1982-10-11 07:18:38','请假'),
(14,1,36,265,1,'1975-07-07 13:18:56','请假'),
(15,2,40,49,1,'1977-09-23 16:48:10','请假'),
(16,1,25,70,1,'1999-05-20 21:45:58','请假'),
(17,1,59,34,2,'1982-01-19 19:58:23','请假'),
(18,2,24,267,1,'2014-11-11 15:51:29','请假'),
(19,1,48,193,2,'2008-01-12 12:14:06','请假'),
(20,1,76,93,2,'1981-02-25 01:33:43','请假'),
(21,2,18,226,2,'1988-12-04 20:18:47','请假'),
(22,2,89,160,2,'2008-07-10 07:00:53','请假'),
(23,1,18,61,1,'2008-11-07 04:50:39','请假'),
(24,2,23,208,2,'1974-10-16 15:55:40','请假'),
(25,2,61,228,2,'2010-07-09 18:54:22','请假'),
(26,2,33,217,2,'1982-02-13 16:32:24','请假'),
(27,2,91,254,1,'1974-08-11 09:04:28','请假'),
(28,1,15,193,2,'1982-08-30 12:23:20','请假'),
(29,2,61,244,1,'1975-08-01 07:08:32','请假'),
(30,2,68,44,1,'1982-01-23 02:26:44','请假'),
(31,1,18,77,1,'1979-10-30 06:50:54','请假'),
(32,2,58,244,1,'1987-05-28 16:49:11','请假'),
(33,1,78,276,2,'2021-08-27 23:02:26','请假'),
(34,1,49,240,2,'2008-06-14 15:03:56','请假'),
(35,2,61,39,2,'2019-11-01 22:07:38','请假'),
(36,1,33,220,1,'1982-01-25 13:11:34','请假'),
(37,2,31,185,2,'1977-10-25 05:47:33','请假'),
(38,1,43,301,2,'2016-10-10 09:02:03','请假'),
(39,2,54,227,2,'2019-04-25 20:35:02','请假'),
(40,1,47,74,1,'2021-01-21 17:07:17','请假'),
(41,2,59,301,2,'1996-07-01 18:11:19','请假'),
(42,2,100,308,2,'2011-12-14 22:56:40','请假'),
(43,2,40,274,1,'1990-02-10 19:45:47','请假'),
(44,1,99,288,1,'1973-07-06 22:05:58','请假'),
(45,2,78,106,1,'2008-04-09 19:29:35','请假'),
(46,2,98,23,1,'1983-09-15 07:03:37','请假'),
(47,2,38,290,1,'1982-05-10 01:42:35','请假'),
(48,1,19,255,2,'2000-07-18 02:11:01','请假'),
(49,2,19,184,1,'1973-01-03 23:32:52','请假'),
(50,1,56,280,2,'1983-03-02 15:58:35','请假'),
(51,2,25,130,1,'2014-09-05 01:20:37','请假'),
(52,2,93,55,1,'1977-09-06 19:18:17','请假'),
(53,1,74,147,1,'1976-03-15 22:41:05','请假'),
(54,1,56,153,2,'2021-03-28 18:25:01','请假'),
(55,1,38,185,1,'2012-09-28 21:24:42','请假'),
(56,1,62,240,2,'2021-03-13 17:09:55','请假'),
(57,2,85,249,1,'2015-04-05 13:17:58','请假');
/*!40000 ALTER TABLE `t_absent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_building`
--

DROP TABLE IF EXISTS `t_building`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_building` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `operator_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `t_building_pk` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_building`
--

LOCK TABLES `t_building` WRITE;
/*!40000 ALTER TABLE `t_building` DISABLE KEYS */;
INSERT INTO `t_building` VALUES
(1,'计算机学院宿舍楼',1),
(2,'电信学院宿舍楼',2);
/*!40000 ALTER TABLE `t_building` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_dormitory`
--

DROP TABLE IF EXISTS `t_dormitory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_dormitory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `building_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `type` int(11) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_dormitory`
--

LOCK TABLES `t_dormitory` WRITE;
/*!40000 ALTER TABLE `t_dormitory` DISABLE KEYS */;
INSERT INTO `t_dormitory` VALUES
(1,2,'205',7,'13525918952'),
(2,1,'297',7,'18968444651'),
(3,2,'191',4,'13563731742'),
(4,1,'286',8,'18948625657'),
(5,2,'135',5,'13209840178'),
(6,1,'164',8,'13530713946'),
(7,2,'280',7,'13543068827'),
(8,2,'196',4,'13531364973'),
(9,1,'270',6,'18926153409'),
(10,2,'161',4,'13564572337'),
(11,2,'232',8,'13598831352'),
(12,1,'224',5,'13547234237'),
(13,1,'184',7,'18908633218'),
(14,1,'164',6,'18962417787'),
(15,1,'210',6,'13233078569'),
(16,2,'219',5,'18934882784'),
(17,1,'234',7,'13513851555'),
(18,1,'268',6,'13572567885'),
(19,2,'229',4,'18948221394'),
(20,1,'119',6,'13565535027'),
(21,1,'273',4,'13556887622'),
(22,1,'145',7,'13281322488'),
(23,2,'282',4,'13548637165'),
(24,2,'103',5,'18991681168'),
(25,2,'105',5,'13514218727'),
(26,1,'211',6,'13546682284'),
(27,2,'282',6,'18985142332'),
(28,1,'144',5,'13215535296'),
(29,1,'255',6,'13549218147'),
(30,1,'197',5,'13278705535'),
(31,2,'239',7,'13523095786'),
(32,1,'167',7,'13567365325'),
(33,1,'159',4,'13212567336'),
(34,1,'140',5,'18942828731'),
(35,2,'233',5,'13262198104'),
(36,2,'236',6,'13578875894'),
(37,2,'134',7,'13519458256'),
(38,1,'104',5,'13274134803'),
(39,1,'271',6,'13574254324'),
(40,2,'197',8,'13239763651'),
(41,1,'148',7,'18906345268'),
(42,1,'118',5,'13530571801'),
(43,2,'103',7,'13220118435'),
(44,1,'167',4,'18921463680'),
(45,1,'249',6,'18965494810'),
(46,1,'276',7,'18920029091'),
(47,1,'236',7,'13244764674'),
(48,2,'100',4,'13219331610'),
(49,1,'132',6,'13532883566'),
(50,2,'179',5,'18916182418'),
(51,1,'131',6,'18985681742'),
(52,1,'247',6,'13213854516'),
(53,1,'173',6,'18965571638'),
(54,1,'126',8,'13265361164'),
(55,1,'250',7,'18940387600'),
(56,2,'292',5,'18954014385'),
(57,2,'240',4,'13583388107'),
(58,2,'266',5,'18909271643'),
(59,1,'228',8,'13537619033'),
(60,2,'124',6,'13553175910'),
(61,2,'160',4,'13237797385'),
(62,2,'203',8,'13265773663'),
(63,1,'197',8,'13533816002'),
(64,2,'183',5,'18953348326'),
(65,2,'282',6,'13204131652'),
(66,1,'160',7,'13526574614'),
(67,2,'204',6,'13268836367'),
(68,2,'167',7,'13291536149'),
(69,2,'137',7,'13574396442'),
(70,1,'214',7,'13551447218'),
(71,1,'120',5,'13575092873'),
(72,1,'187',8,'13564445842'),
(73,2,'227',6,'13277339196'),
(74,1,'134',6,'13223032526'),
(75,1,'139',6,'13571566264'),
(76,2,'290',4,'13525389450'),
(77,1,'166',4,'13211838924'),
(78,2,'136',5,'18915414977'),
(79,2,'227',5,'18932441641'),
(80,1,'151',7,'13200765495'),
(81,2,'171',8,'13216145365'),
(82,1,'256',6,'13563380880'),
(83,1,'118',7,'13252418584'),
(84,2,'133',8,'13517448038'),
(85,2,'276',4,'18988237211'),
(86,2,'245',7,'18905872232'),
(87,2,'291',7,'13529086646'),
(88,1,'237',7,'13514015426'),
(89,2,'280',5,'13597591374'),
(90,2,'128',4,'13585221761'),
(91,1,'215',4,'13524497842'),
(92,1,'168',5,'13296387116'),
(93,2,'168',5,'13288513319'),
(94,2,'146',7,'13554835478'),
(95,1,'214',5,'13570353348'),
(96,1,'284',4,'18927336382'),
(97,2,'259',8,'18984445721'),
(98,2,'206',6,'13534625384'),
(99,2,'102',5,'13548836206'),
(100,1,'192',7,'13552662087');
/*!40000 ALTER TABLE `t_dormitory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_menu`
--

DROP TABLE IF EXISTS `t_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(8) NOT NULL,
  `key` varchar(18) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_menu`
--

LOCK TABLES `t_menu` WRITE;
/*!40000 ALTER TABLE `t_menu` DISABLE KEYS */;
INSERT INTO `t_menu` VALUES
(1,'缺勤记录','absent-record'),
(2,'缺勤登记','absent-register'),
(3,'操作员管理','operator-manager'),
(4,'宿舍楼管理','building-manager'),
(5,'宿舍管理','dormitory-manager'),
(6,'迁出管理','migrate-manager'),
(7,'学生管理','student-manager');
/*!40000 ALTER TABLE `t_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_migrate`
--

DROP TABLE IF EXISTS `t_migrate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_migrate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `dormitory_id` int(11) NOT NULL,
  `reason` varchar(11) NOT NULL,
  `create_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_migrate`
--

LOCK TABLES `t_migrate` WRITE;
/*!40000 ALTER TABLE `t_migrate` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_migrate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_operator`
--

DROP TABLE IF EXISTS `t_operator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_operator` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(18) NOT NULL,
  `password` varchar(18) NOT NULL,
  `name` varchar(8) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `phone` bigint(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `t_operator_t_role_id_fk` (`role_id`),
  CONSTRAINT `t_operator_t_role_id_fk` FOREIGN KEY (`role_id`) REFERENCES `t_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_operator`
--

LOCK TABLES `t_operator` WRITE;
/*!40000 ALTER TABLE `t_operator` DISABLE KEYS */;
INSERT INTO `t_operator` VALUES
(1,'ll','123123','宋玉',0,13312345678,2),
(2,'ww','123123','王力',1,13612345678,2),
(4,'admin1','123123','管理员1',1,88132001,1),
(5,'admin2','123123','管理员2',1,88132002,1);
/*!40000 ALTER TABLE `t_operator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_role`
--

DROP TABLE IF EXISTS `t_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(8) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_role`
--

LOCK TABLES `t_role` WRITE;
/*!40000 ALTER TABLE `t_role` DISABLE KEYS */;
INSERT INTO `t_role` VALUES
(1,'system'),
(2,'admin');
/*!40000 ALTER TABLE `t_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_role_to_menu`
--

DROP TABLE IF EXISTS `t_role_to_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_role_to_menu` (
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_role_to_menu`
--

LOCK TABLES `t_role_to_menu` WRITE;
/*!40000 ALTER TABLE `t_role_to_menu` DISABLE KEYS */;
INSERT INTO `t_role_to_menu` VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(2,1),
(2,2),
(1,7);
/*!40000 ALTER TABLE `t_role_to_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_student`
--

DROP TABLE IF EXISTS `t_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `dormitory_id` int(11) NOT NULL,
  `state` varchar(20) NOT NULL,
  `create_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=348 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_student`
--

LOCK TABLES `t_student` WRITE;
/*!40000 ALTER TABLE `t_student` DISABLE KEYS */;
INSERT INTO `t_student` VALUES
(1,'6','金娜',0,22,'入住','2012-10-10 21:55:01'),
(2,'4','潘桂英',1,79,'入住','1974-01-24 01:43:18'),
(3,'2','陈丽',1,97,'入住','2013-07-17 17:44:57'),
(4,'7','谢平',1,56,'入住','1978-11-05 20:28:56'),
(5,'4','苏芳',0,21,'入住','1984-03-12 14:04:42'),
(6,'7','任伟',1,6,'入住','1997-01-31 14:11:51'),
(7,'3','金丽',1,85,'入住','1987-08-08 00:07:52'),
(8,'5','姜洋',1,47,'入住','2004-05-08 18:55:52'),
(9,'5','郭刚',0,60,'入住','2019-12-09 12:25:08'),
(10,'9','董静',1,63,'入住','1998-11-02 17:55:59'),
(11,'9','戴丽',1,70,'入住','1984-10-27 16:30:25'),
(12,'3','魏秀兰',1,14,'入住','1996-10-14 15:47:46'),
(13,'8','方静',0,8,'入住','2013-06-13 18:12:41'),
(14,'1','戴杰',1,52,'入住','1998-07-21 19:47:05'),
(15,'3','熊娜',1,30,'入住','1974-07-31 06:44:55'),
(16,'4','卢娜',0,32,'入住','1998-12-25 02:29:55'),
(17,'3','沈勇',1,40,'入住','2011-08-04 20:00:32'),
(18,'6','万秀英',0,50,'入住','1983-08-19 20:28:01'),
(19,'4','戴艳',0,17,'入住','1980-03-01 08:01:22'),
(20,'6','袁平',1,67,'入住','2006-05-01 05:15:02'),
(21,'4','傅军',0,14,'入住','1971-10-19 02:44:02'),
(22,'7','陆刚',1,100,'入住','1977-04-22 12:47:22'),
(23,'2','曹娟',0,80,'入住','1991-10-24 14:30:08'),
(24,'6','廖杰',0,43,'入住','1996-07-23 18:01:04'),
(25,'5','尹平',1,89,'入住','1974-04-27 04:36:46'),
(26,'1','常桂英',1,11,'入住','1981-10-04 01:26:19'),
(27,'4','汤勇',0,10,'入住','1979-10-03 17:21:18'),
(28,'4','于静',1,57,'入住','1971-06-13 06:45:08'),
(29,'4','赵涛',1,97,'入住','1970-11-09 12:17:53'),
(30,'6','蔡超',0,18,'入住','1979-12-11 10:01:52'),
(31,'6','邹刚',0,56,'入住','1981-10-29 15:31:45'),
(32,'6','龙洋',1,13,'入住','1995-03-11 04:54:37'),
(33,'4','侯强',0,55,'入住','1974-11-12 13:55:37'),
(34,'3','金敏',0,38,'入住','1989-09-22 21:19:13'),
(35,'5','徐刚',0,41,'入住','2016-02-05 12:51:42'),
(36,'1','潘平',0,88,'入住','1989-07-30 08:44:40'),
(37,'0','常磊',0,64,'入住','1998-01-08 10:48:03'),
(38,'3','廖涛',1,77,'入住','1999-08-25 16:15:05'),
(39,'2','蒋敏',1,88,'入住','2001-05-25 03:39:37'),
(40,'9','梁娜',0,57,'入住','1988-10-11 05:02:16'),
(41,'8','李超',0,73,'入住','1998-11-22 06:30:07'),
(42,'5','曹秀兰',0,37,'入住','1998-02-06 14:54:27'),
(43,'9','孟磊',0,35,'入住','1993-06-25 19:33:46'),
(44,'6','蔡艳',1,66,'入住','1989-09-08 14:02:19'),
(45,'9','潘丽',1,59,'入住','1991-02-21 11:43:13'),
(46,'1','曾霞',1,47,'入住','2000-08-08 10:24:03'),
(47,'0','毛秀英',1,99,'入住','2010-04-19 14:00:12'),
(48,'0','余勇',0,58,'入住','2014-09-18 16:38:35'),
(49,'0','方静',1,15,'入住','1995-07-11 17:12:03'),
(50,'9','范军',0,56,'入住','2012-09-26 15:27:31'),
(51,'9','钱强',0,65,'入住','2010-08-22 15:45:28'),
(52,'5','张艳',1,34,'入住','2009-07-20 23:47:44'),
(53,'8','石洋',1,1,'入住','2022-02-18 17:59:11'),
(54,'4','徐军',0,91,'入住','1999-07-28 12:57:35'),
(55,'3','何超',1,89,'入住','1990-10-04 14:59:57'),
(56,'5','张勇',0,11,'入住','1972-08-02 07:46:57'),
(57,'2','邵洋',1,94,'入住','2011-12-06 06:08:49'),
(58,'5','林强',0,78,'入住','1980-06-23 21:42:50'),
(59,'2','蔡艳',0,86,'入住','1987-11-11 06:57:40'),
(60,'4','程秀兰',0,38,'入住','2019-03-18 02:40:51'),
(61,'3','马洋',1,94,'入住','1994-06-30 08:53:59'),
(62,'4','邱磊',0,22,'入住','2005-07-28 03:54:52'),
(63,'0','武军',1,43,'入住','2007-07-26 22:15:27'),
(64,'1','顾芳',1,66,'入住','2000-04-20 06:30:15'),
(65,'3','赵勇',1,15,'入住','2011-01-01 15:20:26'),
(66,'1','贺娟',0,14,'入住','1995-05-24 18:21:02'),
(67,'8','邵杰',1,96,'入住','1992-05-24 21:21:08'),
(68,'9','雷强',0,20,'入住','2007-04-28 06:27:58'),
(69,'8','戴艳',0,79,'入住','1990-10-23 11:41:18'),
(70,'3','黎静',1,44,'入住','2011-11-10 12:34:52'),
(71,'4','何勇',0,34,'入住','2012-03-30 08:49:42'),
(72,'2','邱霞',0,25,'入住','2015-06-25 03:54:20'),
(73,'7','康明',1,48,'入住','2009-08-01 08:28:21'),
(74,'3','任秀英',1,8,'入住','2007-11-14 14:43:38'),
(75,'2','贺平',1,3,'入住','1995-03-22 07:05:16'),
(76,'1','汤明',0,89,'入住','2017-06-11 15:07:59'),
(77,'3','徐涛',1,70,'入住','2021-03-28 09:18:03'),
(78,'7','袁霞',0,96,'入住','1979-04-16 00:10:15'),
(79,'4','常伟',1,57,'入住','2011-02-06 09:23:25'),
(80,'7','汤超',0,37,'入住','1996-10-15 04:52:45'),
(81,'9','夏强',0,100,'入住','2015-02-08 16:28:11'),
(82,'7','宋勇',1,44,'入住','2002-08-31 05:50:31'),
(83,'7','秦勇',0,45,'入住','2023-02-22 16:20:17'),
(84,'7','田霞',1,86,'入住','1984-08-03 00:46:07'),
(85,'6','毛娟',0,95,'入住','1978-04-27 11:09:32'),
(86,'4','吕敏',0,15,'入住','1985-05-18 17:29:16'),
(87,'8','贺敏',0,73,'入住','1970-01-15 12:58:39'),
(88,'9','杜军',0,69,'入住','1981-04-23 20:36:27'),
(89,'1','张勇',1,27,'入住','1972-07-12 17:22:40'),
(90,'4','姜秀兰',0,12,'入住','1997-04-18 04:31:28'),
(91,'9','毛明',0,69,'入住','1970-04-28 18:08:37'),
(92,'7','姚明',1,5,'入住','2021-01-12 14:15:41'),
(93,'6','秦杰',0,21,'入住','2017-07-01 22:08:17'),
(94,'5','薛娟',0,80,'入住','1981-03-07 08:18:50'),
(95,'3','董霞',0,39,'入住','2009-12-06 00:38:53'),
(96,'4','郑芳',1,60,'入住','1998-07-17 09:39:13'),
(97,'5','许军',0,49,'入住','1985-02-09 12:00:36'),
(98,'8','段静',1,95,'入住','1999-06-10 18:51:53'),
(99,'0','马强',0,8,'入住','2019-09-03 10:22:08'),
(100,'1','李杰',1,73,'入住','2021-02-28 23:54:15'),
(101,'6','黄秀英',1,82,'入住','2012-02-03 17:39:09'),
(102,'5','张丽',0,73,'入住','1989-02-03 17:31:06'),
(103,'7','蔡明',1,85,'入住','2014-09-05 09:24:20'),
(104,'3','黄强',1,14,'入住','1986-11-09 09:50:06'),
(105,'2','曾磊',0,86,'入住','2016-04-30 08:34:44'),
(106,'2','蒋霞',1,14,'入住','1993-10-25 15:45:53'),
(107,'8','曾杰',1,5,'入住','2019-03-15 09:57:48'),
(108,'4','苏伟',0,20,'入住','1999-10-08 08:12:34'),
(109,'3','范刚',0,25,'入住','2005-05-15 19:26:24'),
(110,'7','常芳',1,59,'入住','1974-03-27 08:45:06'),
(111,'9','梁娟',1,38,'入住','2022-05-13 03:18:55'),
(112,'7','侯洋',1,84,'入住','1979-12-20 11:36:31'),
(113,'3','谢洋',0,69,'入住','2008-09-06 16:37:49'),
(114,'4','余明',1,72,'入住','1986-12-25 18:18:34'),
(115,'2','董军',0,46,'入住','1976-06-26 02:11:06'),
(116,'7','顾涛',1,17,'入住','1980-06-12 05:28:26'),
(117,'0','段霞',1,54,'入住','1972-09-24 09:39:22'),
(118,'0','蒋敏',1,42,'入住','2005-01-16 21:32:27'),
(119,'7','唐洋',1,4,'入住','2022-03-19 23:56:28'),
(120,'4','马军',1,45,'入住','1973-08-07 15:25:19'),
(121,'7','白磊',0,54,'入住','2009-09-24 09:38:30'),
(122,'7','汤丽',1,10,'入住','1999-05-31 07:47:56'),
(123,'3','黎明',1,21,'入住','1982-03-24 12:53:44'),
(124,'1','崔磊',0,13,'入住','1975-07-16 11:15:31'),
(125,'0','田秀兰',0,82,'入住','1984-02-02 10:30:54'),
(126,'7','任刚',1,62,'入住','1997-04-04 17:42:32'),
(127,'8','唐平',0,43,'入住','2020-03-10 15:13:20'),
(128,'6','胡静',1,97,'入住','2003-02-25 03:10:25'),
(129,'1','罗勇',0,85,'入住','2005-12-29 10:44:58'),
(130,'6','丁秀兰',1,55,'入住','1983-09-10 18:42:36'),
(131,'8','萧涛',0,72,'入住','2008-02-16 04:14:22'),
(132,'6','钱涛',0,71,'入住','1977-05-09 11:39:17'),
(133,'4','李娟',1,38,'入住','2000-12-07 15:13:15'),
(134,'5','蒋静',1,96,'入住','1999-04-11 14:30:38'),
(135,'0','姚娜',1,49,'入住','1975-11-27 05:04:56'),
(136,'2','赖娜',0,28,'入住','2002-10-30 22:16:45'),
(137,'0','孙磊',1,65,'入住','2004-12-05 10:34:54'),
(138,'4','汪超',0,83,'入住','2018-01-01 18:23:03'),
(139,'7','周洋',1,3,'入住','2005-12-20 06:40:51'),
(140,'0','郭杰',0,93,'入住','2000-10-06 19:37:38'),
(141,'3','陈洋',1,64,'入住','1995-10-18 11:47:07'),
(142,'7','马芳',1,39,'入住','2012-09-06 15:20:17'),
(143,'9','易强',0,41,'入住','1976-06-26 02:27:02'),
(144,'5','萧敏',0,3,'入住','2019-04-18 18:06:55'),
(145,'8','冯洋',1,38,'入住','2012-10-20 12:50:35'),
(146,'9','毛静',1,60,'入住','2003-02-11 04:41:00'),
(147,'3','傅杰',0,20,'入住','2011-11-18 11:40:42'),
(148,'7','白娟',0,36,'入住','1984-02-24 22:40:06'),
(149,'4','廖敏',0,97,'入住','2007-04-29 21:06:43'),
(150,'5','康涛',0,85,'入住','1977-12-29 19:15:00'),
(151,'1','姚勇',0,78,'入住','1982-05-01 16:36:53'),
(152,'6','吕强',0,59,'入住','1977-02-24 03:04:42'),
(153,'5','杜秀兰',1,86,'入住','1979-04-18 06:04:18'),
(154,'5','于军',0,69,'入住','2007-10-12 10:47:19'),
(155,'6','曹娜',0,98,'入住','2021-07-03 15:23:19'),
(156,'2','方洋',1,12,'入住','2008-05-11 04:03:30'),
(157,'3','杨静',0,76,'入住','1985-07-16 01:48:45'),
(158,'3','孙磊',1,99,'入住','1970-05-18 03:37:52'),
(159,'6','朱超',1,21,'入住','1990-08-22 16:58:43'),
(160,'0','郭芳',1,10,'入住','2022-07-10 07:33:36'),
(161,'1','乔洋',0,35,'入住','2016-12-24 04:44:29'),
(162,'5','于平',0,76,'入住','1988-05-27 21:02:00'),
(163,'5','阎超',1,70,'入住','2011-10-12 05:40:11'),
(164,'6','曹丽',0,17,'入住','2008-03-07 17:09:51'),
(165,'6','傅超',0,75,'入住','2010-03-02 21:46:02'),
(166,'5','邱刚',0,82,'入住','2009-06-03 18:25:17'),
(167,'2','袁洋',0,53,'入住','2000-10-25 17:08:55'),
(168,'1','韩洋',1,84,'入住','2016-01-20 03:08:21'),
(169,'5','熊涛',0,23,'入住','1983-03-13 01:53:23'),
(170,'5','薛强',1,16,'入住','1980-06-10 18:09:28'),
(171,'2','徐磊',0,31,'入住','1994-04-25 06:50:43'),
(172,'2','吕军',0,63,'入住','1985-10-09 08:48:05'),
(173,'7','吕军',1,67,'入住','1978-12-12 08:06:56'),
(174,'6','朱明',0,50,'入住','1977-06-16 16:39:17'),
(175,'4','武洋',1,60,'入住','2011-04-30 10:48:07'),
(176,'5','阎艳',0,3,'入住','2012-09-15 00:03:22'),
(177,'5','邵强',1,68,'入住','2015-11-05 07:03:46'),
(178,'0','李伟',0,80,'入住','2013-12-27 10:46:04'),
(179,'1','康静',0,28,'入住','2002-03-09 21:28:36'),
(180,'6','赖杰',1,22,'入住','2010-10-23 15:37:53'),
(181,'6','李秀英',0,44,'入住','2022-08-17 19:38:44'),
(182,'6','汤丽',1,58,'入住','1996-12-04 04:07:16'),
(183,'8','郝刚',0,33,'入住','1972-05-17 08:12:22'),
(184,'2','冯平',0,92,'入住','2006-03-02 09:54:35'),
(185,'4','程丽',0,19,'入住','1975-11-22 22:21:07'),
(186,'7','崔强',1,66,'入住','1977-01-26 14:35:26'),
(187,'1','邵勇',1,41,'入住','2012-12-18 10:32:31'),
(188,'2','彭超',1,55,'入住','1974-06-01 18:17:40'),
(189,'4','康洋',1,48,'入住','1973-11-01 18:00:14'),
(190,'2','张静',1,20,'入住','1973-08-05 20:04:23'),
(191,'9','吴涛',0,63,'入住','1986-10-07 19:37:51'),
(192,'6','文超',1,42,'入住','1979-09-14 22:20:16'),
(193,'3','沈磊',0,14,'入住','2005-05-25 20:20:28'),
(194,'4','傅桂英',1,14,'入住','1999-12-11 17:38:45'),
(195,'8','黎桂英',0,14,'入住','1996-06-25 20:32:54'),
(196,'1','邓敏',1,22,'入住','1981-11-04 03:15:41'),
(197,'3','熊强',0,79,'入住','2019-10-27 23:12:56'),
(198,'4','高秀英',1,83,'入住','1982-07-28 01:00:50'),
(199,'4','胡明',1,49,'入住','2001-10-13 13:11:20'),
(200,'4','袁勇',1,92,'入住','2020-05-06 18:55:13'),
(201,'1','吴刚',1,32,'入住','1977-11-11 19:22:50'),
(202,'0','龙洋',1,8,'入住','1973-04-13 13:53:10'),
(203,'1','崔秀兰',1,68,'入住','1976-06-08 18:14:40'),
(204,'3','任秀兰',1,58,'入住','1976-11-18 16:38:25'),
(205,'3','吕霞',0,85,'入住','1993-03-23 09:54:53'),
(206,'6','薛勇',0,53,'入住','1974-05-22 08:43:46'),
(207,'5','秦娜',0,70,'入住','1973-09-30 20:25:47'),
(208,'3','曾杰',1,6,'入住','1982-03-16 05:07:52'),
(209,'5','吴洋',1,95,'入住','1972-11-19 05:56:02'),
(210,'4','冯艳',1,76,'入住','1987-07-21 12:35:21'),
(211,'0','朱秀兰',0,14,'入住','1992-06-19 08:36:37'),
(212,'1','曾娟',0,59,'入住','2018-01-25 00:22:28'),
(213,'9','余杰',0,86,'入住','1993-10-27 01:27:15'),
(214,'5','谢刚',0,13,'入住','2017-09-04 04:25:56'),
(215,'2','徐洋',0,5,'入住','2007-03-09 20:02:45'),
(216,'5','顾洋',1,85,'入住','2019-10-30 10:48:37'),
(217,'5','唐秀英',1,99,'入住','2011-10-24 08:48:58'),
(218,'2','周磊',0,18,'入住','1982-06-14 18:52:50'),
(219,'2','薛敏',0,13,'入住','1989-06-17 05:21:57'),
(220,'1','徐涛',1,89,'入住','1986-03-20 22:20:56'),
(221,'2','万超',0,62,'入住','1991-12-07 14:54:12'),
(222,'9','胡敏',0,78,'入住','1981-12-06 13:26:14'),
(223,'3','邓霞',0,56,'入住','1974-05-11 21:54:02'),
(224,'5','尹涛',0,65,'入住','1979-05-11 18:50:03'),
(225,'6','马洋',1,62,'入住','2023-03-11 02:41:48'),
(226,'4','姚桂英',1,40,'入住','1979-09-22 07:18:37'),
(227,'5','卢秀兰',0,28,'入住','1970-07-01 20:36:04'),
(228,'6','任丽',0,11,'入住','2003-07-09 07:55:41'),
(229,'4','钱霞',0,31,'入住','1977-08-30 02:41:54'),
(230,'5','杨强',1,70,'入住','2001-07-09 06:53:50'),
(231,'5','董娜',1,38,'入住','1992-04-13 08:48:37'),
(232,'2','阎芳',1,51,'入住','1981-03-29 08:19:36'),
(233,'5','白涛',1,36,'入住','2009-12-12 09:47:12'),
(234,'7','梁强',1,26,'入住','1982-07-29 11:44:34'),
(235,'0','汪强',0,92,'入住','1995-12-22 01:53:18'),
(236,'9','雷秀兰',1,51,'入住','1997-03-22 15:23:49'),
(237,'7','邵娜',0,68,'入住','2013-07-19 19:58:03'),
(238,'3','蒋娜',0,43,'入住','1983-02-17 23:00:25'),
(239,'5','石秀英',0,37,'入住','1970-10-03 03:44:53'),
(240,'4','徐静',1,52,'入住','2008-04-10 00:45:24'),
(241,'3','龚秀英',1,49,'入住','1976-01-10 18:27:14'),
(242,'3','贺杰',1,40,'入住','1970-06-14 10:05:55'),
(243,'7','顾军',0,27,'入住','1985-03-21 14:43:45'),
(244,'8','吴芳',1,53,'入住','2001-12-08 15:05:22'),
(245,'8','沈勇',0,59,'入住','1997-10-27 12:04:44'),
(246,'5','胡娟',1,43,'入住','2021-03-12 10:50:15'),
(247,'1','汪秀英',0,46,'入住','1984-11-17 16:38:06'),
(248,'1','曹娜',1,33,'入住','2004-12-10 20:19:49'),
(249,'6','胡洋',0,90,'入住','2010-02-24 20:26:16'),
(250,'5','林秀英',1,1,'入住','1975-04-13 14:25:33'),
(251,'8','林磊',1,12,'入住','2007-07-17 19:34:34'),
(252,'7','雷秀英',0,84,'入住','2001-06-20 07:00:50'),
(253,'7','汪军',1,82,'入住','2000-09-23 01:06:26'),
(254,'7','秦平',1,57,'入住','1998-09-19 09:02:49'),
(255,'1','赖桂英',1,76,'入住','1997-01-14 11:20:48'),
(256,'7','邱娟',1,47,'入住','2004-05-18 14:55:43'),
(257,'4','马秀兰',1,67,'入住','2012-08-31 07:09:53'),
(258,'4','常洋',1,98,'入住','1985-04-12 05:47:05'),
(259,'7','郭涛',1,37,'入住','1995-07-23 16:43:42'),
(260,'3','萧平',1,2,'入住','1978-12-28 09:35:15'),
(261,'5','罗刚',0,74,'入住','1980-01-19 08:56:24'),
(262,'9','张刚',0,85,'入住','1971-06-19 11:06:52'),
(263,'2','汪霞',1,31,'入住','1981-03-07 13:55:00'),
(264,'9','冯杰',1,93,'入住','2013-10-17 08:23:43'),
(265,'6','曹涛',1,48,'入住','1980-11-06 12:35:30'),
(266,'5','武芳',1,55,'入住','2007-03-10 06:18:58'),
(267,'1','黎洋',1,21,'入住','2003-08-24 02:46:23'),
(268,'3','周秀英',1,89,'入住','1973-04-23 16:00:48'),
(269,'2','蒋洋',1,42,'入住','2017-09-08 21:17:22'),
(270,'5','罗军',0,99,'入住','2004-09-18 08:27:20'),
(271,'4','杜芳',1,94,'入住','2015-02-04 12:26:19'),
(272,'3','武洋',1,81,'入住','2022-08-03 23:20:12'),
(273,'3','白娟',0,3,'入住','1996-08-04 04:46:03'),
(274,'7','雷磊',1,35,'入住','2015-09-02 20:11:17'),
(275,'6','赖芳',1,39,'入住','1996-12-09 08:00:35'),
(276,'8','傅娜',0,75,'入住','2015-04-17 18:18:26'),
(277,'4','傅丽',1,10,'入住','1985-11-28 04:43:37'),
(278,'0','王勇',0,42,'入住','1993-11-07 08:40:33'),
(279,'8','熊秀英',0,1,'入住','2014-07-07 18:13:41'),
(280,'6','邵芳',0,36,'入住','2003-10-25 14:41:18'),
(281,'1','龚强',0,33,'入住','1995-06-16 07:02:43'),
(282,'6','卢丽',0,39,'入住','2004-07-31 09:30:51'),
(283,'4','邵涛',1,43,'入住','1985-03-27 02:02:18'),
(284,'2','刘平',0,100,'入住','1970-11-23 05:23:48'),
(285,'6','程平',1,31,'入住','2005-03-06 13:35:13'),
(286,'5','曾艳',1,7,'入住','2006-07-22 04:56:01'),
(287,'8','高娟',1,30,'入住','1975-06-22 13:17:45'),
(288,'0','萧芳',1,76,'入住','1970-02-18 00:20:16'),
(289,'2','孙霞',1,79,'入住','2010-02-04 12:43:15'),
(290,'3','戴秀兰',1,11,'入住','2018-09-21 15:47:51'),
(291,'3','雷娟',0,31,'入住','2010-11-28 16:45:55'),
(292,'7','胡芳',1,11,'入住','1991-10-14 07:48:57'),
(293,'4','吕超',1,31,'入住','2006-06-14 09:11:37'),
(294,'2','康刚',1,17,'入住','1988-08-24 15:19:27'),
(295,'6','萧芳',1,32,'入住','1995-04-16 20:06:57'),
(296,'3','沈娜',1,21,'入住','2000-04-25 11:02:56'),
(297,'7','傅军',1,40,'入住','1991-05-21 15:05:38'),
(298,'7','蔡明',0,15,'入住','2006-04-07 05:00:29'),
(299,'1','董秀兰',1,64,'入住','2010-08-21 11:31:47'),
(300,'2','赵平',0,3,'入住','2012-08-31 02:45:38'),
(301,'8','赖静',1,72,'入住','1999-09-30 06:26:20'),
(302,'3','戴艳',0,22,'入住','2012-10-08 13:59:35'),
(303,'6','萧芳',0,74,'入住','1973-02-26 04:45:34'),
(304,'3','赵平',0,67,'入住','2017-09-26 19:22:50'),
(305,'5','朱艳',0,45,'入住','1996-08-23 19:54:14'),
(306,'5','崔涛',0,4,'入住','2008-07-26 17:15:07'),
(307,'3','赵秀英',1,87,'入住','1976-04-06 00:38:54'),
(308,'1','锺静',1,95,'入住','1980-10-08 10:58:22'),
(309,'1','阎超',0,2,'入住','2007-08-21 06:11:11'),
(310,'8','刘敏',1,37,'入住','1986-12-29 09:37:01'),
(311,'8','谢桂英',1,74,'入住','1987-01-19 19:01:26'),
(312,'0','杨静',1,83,'入住','2002-04-02 06:06:18'),
(313,'5','金磊',0,45,'入住','1990-08-01 06:31:45'),
(314,'2','杨明',0,93,'入住','1983-11-16 00:13:20'),
(315,'7','彭娟',1,61,'入住','1996-02-08 03:43:30'),
(316,'8','陈伟',1,95,'入住','2008-06-25 14:05:57'),
(317,'7','熊静',0,1,'入住','2012-04-21 20:12:23'),
(318,'4','侯刚',0,47,'入住','1998-06-18 21:19:09'),
(319,'1','潘洋',0,99,'入住','2022-11-15 06:24:59'),
(320,'9','沈强',1,89,'入住','2014-03-06 10:45:45'),
(321,'4','贾秀英',1,97,'入住','2008-04-13 17:45:15'),
(322,'1','梁娟',0,27,'入住','1993-10-25 04:58:53'),
(323,'8','贺洋',1,85,'入住','1997-05-09 15:38:17'),
(324,'2','侯磊',0,48,'入住','1999-10-17 06:36:07'),
(325,'1','郝刚',0,78,'入住','1983-03-17 14:55:31'),
(326,'2','贺秀英',1,54,'入住','1975-12-13 15:12:45'),
(327,'7','吴静',1,70,'入住','2007-11-21 18:52:02'),
(328,'1','萧丽',0,73,'入住','2017-10-18 12:44:08'),
(329,'2','李霞',1,68,'入住','1999-03-27 01:40:50'),
(330,'8','姚秀英',1,21,'入住','1978-03-02 07:33:11'),
(331,'6','毛强',0,46,'入住','1996-05-28 15:54:54'),
(332,'9','任刚',0,97,'入住','1992-06-21 21:19:41'),
(333,'1','文明',0,74,'入住','2023-01-13 09:15:38'),
(334,'4','高秀兰',0,60,'入住','2022-04-03 09:14:59'),
(335,'6','高杰',1,1,'入住','1982-05-25 23:06:27'),
(336,'1','魏超',1,5,'入住','2005-08-27 00:21:55'),
(337,'2','杨磊',0,95,'入住','1970-01-14 09:59:40'),
(338,'6','黎霞',0,81,'入住','1978-02-24 09:14:32'),
(339,'3','石艳',1,5,'入住','1976-03-18 21:23:24'),
(340,'4','秦桂英',0,38,'入住','2006-08-26 22:07:41'),
(341,'1','乔秀兰',0,31,'入住','2018-11-18 21:05:13'),
(342,'5','吴娟',0,20,'入住','2009-06-28 00:45:57'),
(343,'1','阎敏',0,81,'入住','1987-11-15 05:33:44'),
(344,'2','谭军',0,6,'入住','1994-04-17 01:53:04'),
(345,'6','卢军',0,49,'入住','1973-06-13 04:15:12'),
(346,'3','贺平',1,26,'入住','1979-12-23 23:59:12'),
(347,'4','孔勇',1,62,'入住','1987-08-22 10:53:03');
/*!40000 ALTER TABLE `t_student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-29 10:57:30
