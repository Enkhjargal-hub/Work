import express from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { createUser } from "../resolvers/users/create-users.js";

export const useRouter = express.Router();

useRouter.get("/users", getUsers);
useRouter.post("/users", createUser);
