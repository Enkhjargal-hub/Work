import fs from "fs";

export const getUsers = (req, res) => {
  const users = fs.readFileSync("src/db/users.json");

  res.send(JSON.parse(users));
};
