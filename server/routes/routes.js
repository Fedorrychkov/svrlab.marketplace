import express from 'express';
import Router from 'express';
import Users from '../models/users';
// const Users = require('../models/users');
// const users = new Users();
const db = require('../models');

const router = Router();

router.get('/api/v1/users', async (req, res, next) => {
    const data = await Users.getAll();
    res.json({status: 200, statusText: 'OK!', data: data});
});
  
export default router;