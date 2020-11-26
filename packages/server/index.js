const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
