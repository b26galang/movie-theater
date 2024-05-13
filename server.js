const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const PORT = 3000;

const { Show, User } = require('./models/index');

const showRoutes = require('./routes/showRoutes');
const userRoutes = require('./routes/userRoutes');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/api/shows', showRoutes);
server.use('/api/users', userRoutes);

server.listen(PORT, () => {
    console.log(`Our server is now listen to port ${PORT}`)
})
