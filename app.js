

require("dotenv").config();

const express = require("express")

const app = express();

const knex = require("./database")

app.use(express.json())

require("./model")(knex)


const create = express.Router();
app.use("/",create);
require("./routes/create")(create,knex)



const update = express.Router();
app.use("/",update);
require("./routes/update")(update,knex)


const remove = express.Router();
app.use("/",remove);
require("./routes/delete")(remove,knex)



app.get("/",(req,res)=>{
    knex.select().from("users")
        .then((data)=>{
            res.send(data)
        })
})


const PORT = process.env.PORT
app.listen(PORT, ()=>{
    
    console.log(`Server is running on PORT ${PORT}`);
    
})
    
