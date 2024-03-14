const express = require('express');
const routerApi = express.Router();
const { getUserApi, postusernameAPI, putUploadNameAPI, DeleteUser } = require('../controllers/apiController');

//router    .method('/router, (handler));
routerApi.get('/users', (getUserApi));
routerApi.post('/users', (postusernameAPI));
routerApi.put('/users', (putUploadNameAPI));
routerApi.delete('/users', (DeleteUser));

module.exports = routerApi;