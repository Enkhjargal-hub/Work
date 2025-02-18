// const express = require("express"); // express module import hiigd express.js tataj avch bn
// const app = express(); // app huvisagch ni express hadgalj bn
// const port = 3000;

// app.use(express.json()); //ogogdol unshihad tusalj bga chuhal

// app.post("/api", (request, response) => { //api zam dr post huselt huleej avna
//     response.json({
//         name: "Jolo",
//         email: "joloenja@gmail.com",
//         password: "94126297"
//     });
// });

// app.get("/users")

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

import express from "express";
import { postRouter } from "./routes/post-router.js";
import { useRouter } from "./routes/users-router.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", useRouter);
app.use("/post", postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
