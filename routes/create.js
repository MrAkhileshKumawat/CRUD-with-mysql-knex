module.exports = (create,knex) =>{
    create.post("/create",(req,res)=>{
        knex("users").insert(req.body)
            .then((data)=>{
                console.log("Data Inserted Successfully...")
                res.send(data)
            }).catch((err)=>{
                console.log(err);
                res.send(err);
            });
    })
}