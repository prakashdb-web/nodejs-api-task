const express = require("express");

const statusRoutes = require("./routes/statusRoutes");
const recordsRoutes = require("./routes/recordsRoutes");

const app = express();

app.use(express.json());

app.use("/status", statusRoutes);
app.use("/records", recordsRoutes);

app.listen(1000, () => {
    console.log("Server running on port 1000");
});