module.exports = (update, knex) => {
    update.put("/update/:id", (req, res) => {
        knex("users").update(req.body).where("id", req.params.id)
            .then(()=>{
                console.log("Updated")
                knex("users").where("id",req.params.id)
                    .then((data)=>{
                        res.send(data)
                    })
            })
    })
}