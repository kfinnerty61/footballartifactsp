USE `sports_artifacts`;

CREATE TABLE `artifact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `team_id` int NOT NULL,
  `artifact_type_id` int NOT NULL,
  `create_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_team_team_id_idx` (`team_id`),
  KEY `FK_artifact_type_id_idx` (`artifact_type_id`),
  CONSTRAINT `FK_artifact_type_id` FOREIGN KEY (`artifact_type_id`) REFERENCES `artifact_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_team_team_id` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
