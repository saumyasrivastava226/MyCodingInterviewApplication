

const mysql = require("mysql2");
const config = require("config");

console.log(config);
const dbConfig = {
    host: config.get("dbHost"),    
    user: config.get("dbUser"),      
    password: config.get("dbPassword"),  
    database: config.get("dbDatabase")   
};
const connection= mysql.createConnection(dbConfig);
connection.connect();
//

function createTrainingsTable() {
    return new Promise((resolve, reject) => {
        connection.query(`CREATE TABLE IF NOT EXISTS TRAININGS (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            campaign VARCHAR(255) NOT NULL FOREIGN KEY refernces rpt_campaigns(name),
            training_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status VARCHAR(20),
            topics VARCHAR(100) FOREIGN KEY refernces rpt_topics(name),

        )`, (error, results, fields) => {
            if (error) {
                console.error("Error creating USER table:", error);
                reject(error);
            } else {
                console.log("USER table created successfully");
                resolve(results);
            }
        });
    });
}


async function getEmployeesByDealershipId(dealershipId){
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT first_name,last_name,role FROM rpt_employees WHERE dealership_id= ${dealershipId}`, (error,results)=>{
            if(error){
                 reject(error);
             
            }
            else{
                resolve(results);
            }
      })
    })
}

async function getTopicsByCompaign(campaign_id){
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT name FROM rpt_topics WHERE campaign_id= ${campaign_id}`, (error,results)=>{
            if(error){
                 reject(error);
             
            }
            else{
                resolve(results);
            }
      })
    })
}


module.exports = {
   
    getTopicsByCompaign,
    getEmployeesByDealershipId,
    createTrainingsTable
};


