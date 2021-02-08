const express = require('express');
const cors = require('cors');

const messagesRouter = require('./routers/messagesRoute');
require('./db/mongoose');

const app = express();

app.use(cors());
app.use(express.json());
app.use(messagesRouter);

app.listen(3030, () => {
    console.log("Server conected, port: 3030");
});



