const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
});

sequelize.sync();

app.get('/', (req, res) => {
    res.send('Backend API is running');
});

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
