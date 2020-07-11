module.exports = (remove,knex)=>{
    remove.delete("/delete/:id",(req,res)=>{
        knex("users").delete().where("id",req.params.id)
            .then(()=>{
                console.log("Element Deleted")
                knex.select().from("users")
                    .then((data)=>{
                        res.send(data)
                    })
            })
    })
}