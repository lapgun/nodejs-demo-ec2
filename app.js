const express = require("express");
const app = express();
const port = 3000;

app.get("/user", (req, res) => {
  res.json([
    {
      number: 1,
      name: "John",
      gender: "male",
    },
    {
      number: 2,
      name: "Ashley",
      gender: "female",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
