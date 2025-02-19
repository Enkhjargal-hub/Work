import fs from 'fs';

import express from "express";
import { deleteUser } from '../resolvers/users/delete-user';
import { updateUser } from '../resolvers/users/update-user';
import { login } from '../resolvers/users/login';

export const useRouter = express.Router();

useRouter.get("/users", getUsers);
useRouter.post("/users", createUser);
