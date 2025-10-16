const express = require('express');
const itemRoutes = require('./routes/itemRoutes.js');
const app = express();
const port = 3000;

app.use(express.json());

// Mount the router on a base path
app.use('/items', itemRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});