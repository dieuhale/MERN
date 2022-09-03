const express = require("express");
const app = express();
const port = 8000;
app.use(express.json(), express.urlencoded({ extended: true }));

require("./config/mongoose.config")
require ("./routes/jokes.routes")(app)

app.listen(port, () => console.log(`express is running on port", ${port}`));