import express from "express";
const PORT = 5000;
const app = express();
// //i used the req and res as i already used this before and ysed it for default route.
// app.get("/", (req, res) => {
//   res.send("Hello, Welcome to my server!");
// });

// route to my name lab2
app.use("/_rudra_patel_lab2", express.static("module-examples/basic-modules"));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
