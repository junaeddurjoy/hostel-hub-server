const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { LOCAL_CLIENT, CLIENT } = require('../config/default');

const applyMiddleware = (app) => {
    // middleware
    app.use(cors({
        origin: [LOCAL_CLIENT,CLIENT],
        credentials: true
    }));
    app.use(express.json());
}

module.exports = applyMiddleware