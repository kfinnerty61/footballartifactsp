CREATE TABLE `artifact_feature` (
  `id` int NOT NULL AUTO_INCREMENT,
  `artifact_id` int NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `image_link` varchar(250) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_artifact_id_idx` (`artifact_id`),
  CONSTRAINT `FK_artifact_id` FOREIGN KEY (`artifact_id`) REFERENCES `artifact` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
