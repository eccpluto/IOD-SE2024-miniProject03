const express = require("express");
const app = express();
const minionController = require('./controllers').minionController;

require("dotenv").config();

// // pull in database setup code
let dbConnect = require('./dbConnect');

app.use(express.json());

// // pull in routes
let routes = require('./routes');
app.use('/api/minions', routes.minionRoutes);
// TODO add extra routes

app.get("/", (req, res) => {
    console.log('[server] delegating get http method to populateMinions.')
    minionController.populateMinions(res);
    // res.json({ messsage: "Welcome to my MongoDB application." })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});