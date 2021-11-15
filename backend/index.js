const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");

const { router, db } = require('./endpoints.js');

dotenv.config();
const app = express();

const PORT = process.env.API_PORT;
const ORIGIN = process.env.ORIGIN;


app.use(express.json());
//app.use(cors({origin: ORIGIN}))
app.use('/', router);

const httpServer = http.createServer(app);

app.listen(PORT, () => {
    console.log("Backend API started @ port " + PORT);
})

function shutdown() {
    console.log("Shutting down backend...");
    httpServer.close();
    db.close();
    process.exit();
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);