
// import the model
const Todo = require("../models/Todo");

//define the route handler
exports.getTodos = async(req,res) =>{

    try{
        //fetch all todositem from database
        const todos = await Todo.find({});

        //response 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is Fetched"
        })

    }
   catch(err){
    console.error(err);
    console.log(err);
    res.status(500)
    .json({
        success:false,
        data:"internal server error",
        message:err.message,
    })

   }
}


// command
//brew services start mongodb-community
 
//   mongod --config /opt/homebrew/etc/mongod.conf


exports.getTodoById = async(req,res) =>{

    try{
       // extract Todo items basis on id
       const id = req.params.id;
       const todo = await Todo.findById({_id: id})

       //data for given id not found
       if(!todo){
        return res.status(404).json({
            success:false,
            message:"No Data Found with given id",
        })
       }
       // data for given id found
       res.status(200).json({
        success:true,
        data:todo,
        message: `Todo ${id} data successfully fetched`,
       })

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    

    }
}