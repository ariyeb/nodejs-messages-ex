const express = require('express');
const cors = require('cors');

const messagesRouter = require('./routers/messagesRoute');
require('./db/mongoose');
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(messagesRouter);

app.listen(port, () => {
    console.log("Server conected, port:", port);
});



