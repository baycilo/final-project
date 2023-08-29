const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 6000;

const handlers = require("./handlers");

// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));
app.use(express.json());

handlers(app);

// this is our catch all endpoint.
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

// Node spins up our server and sets it to listen on port 6000.
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
