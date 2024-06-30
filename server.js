const express = require("express");
const app = express();
const minionController = require('./controllers').minionController;

require("dotenv").config();

// // pull in database setup code
let dbConnect = require('./dbConnect');

// // pull in routes
let routes = require('./routes');
app.use('/api/minions', routes.minionRoutes);
// TODO add extra routes

app.use(express.json());

app.get("/", (req, res) => {
    minionController.populateMinions(res);
    // res.json({ messsage: "Welcome to my MongoDB application." })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});