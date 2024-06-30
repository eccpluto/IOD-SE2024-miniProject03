const express = require("express");
const app = express();

require("dotenv").config();

// // pull in database setup code
let dbConnect = require('./dbConnect');

// // pull in routes
// let userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ messsage: "Welcome to my MongoDB application." })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});