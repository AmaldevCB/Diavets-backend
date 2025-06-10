require('dotenv').config()

const express = require('express')

const cors = require('cors')

const router = require('./router')

const server = express()

server.use(cors())

server.use(express.json())

server.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error("Bad JSON received");
        return res.status(400).json({ error: "Invalid JSON payload" });
    }
    next();
})

server.use(router)

require('./connnection')

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})
