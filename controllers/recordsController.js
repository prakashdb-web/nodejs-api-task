const db = require("../db");

exports.getName = (req, res) => {

    const { gid, accid } = req.query;

    const sql = "SELECT gname FROM records_table WHERE gid=? AND accid=?";
    console.log("gid:", gid);
console.log("accid:", accid);

    db.query(sql, [gid, accid], (err, result) => {

        if (err) {
            return res.status(500).json({ error: err });
        }

        if (result.length === 0) {
            return res.json({ message: "No record found" });
        }

        res.json({
            gname: result[0].gname
        });

    });

};