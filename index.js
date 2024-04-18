const express= require("express");
const app= express();
const config=require("config");
const employeeRoutes = require('./routes/employees');
const testRoutes= require("./routes/test");
const topicRoutes= require("./routes/topics")
let port= config.get("port")||8890;
const db = require("./db"); 
app.use((req, res, next) => {
    req.pool = db;
    next();
});

app.use('/',testRoutes);
app.use('/employees', employeeRoutes);
app.use('/topics', topicRoutes);



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    // db.createTrainingsTable();
});