import { response } from "express";
import fs from "fs";
import jwt from 'jsonwebtoken';

export const getUsers = (req, res) => {
  const token = req.headers.authorization.split(' ')[1]

  try{

  jwt.verify(token, 'nuuts tulhuur');
  if (!response) return res.json({message: "Unauthorized"})
  const rawUserData = fs.readFileSync('src/db/users.json');
  res.send(JSON.parse(rawUserData));
} catch (err) {
  return res.json({message: "unauthorized!!!"})
}

};







