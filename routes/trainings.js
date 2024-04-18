
// // the end points needed 
// //GET: /trainings, training?id= compaignId

// //POST : /training 
// // Need to create a  Training table(id, compaign(referces to external table compaign), topics(references to external ), training_date, status, list_of employees)
 CREATE TABLE `rpt_training` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `compaign_name` varchar(255) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'draft',
  `training_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
   `topics` varchar(255) ,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `campaign_name` (`campaign_name`) , `topics` (`name`) 
  CONSTRAINT `rpt_employees_ibfk_1` FOREIGN KEY (`compaign_name`) REFERENCES `rpt_campaigns` (`name`) ON DELETE CASCADE,
  CONSTRAINT `rpt_employees_ibfk_2` FOREIGN KEY (`topics`) REFERENCES `rpt_topic` (`name`) ON DELETE CASCADE

) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

// ONe table for Trainer as well( in the starting only the Trainer will login and thereby his trainings and all will be displayed)
// create Table Trainer 