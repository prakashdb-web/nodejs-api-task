const db = require("../db");

exports.getStatus = (req,res)=>{

        console.log ("Request received: ", req.body)
    const {accid, sid} = req.body;


 const sql = "SELECT svalue FROM status_table WHERE accid=? AND sid=?";

 console.log("Running query...");
    db.query(sql,[accid,sid],(err,result)=>{

        if(err){
            return res.status(500).json({error:err});
        }

        if(result.length === 0){
            return res.json({message:"No data found"});
        }

        res.json({
            svalue: result[0].svalue
        });

    });

};