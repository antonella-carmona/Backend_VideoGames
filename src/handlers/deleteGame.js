const {deleteGameId}= require("../controllers/deleteById")

const deleteGameById= async(req, res)=>{
    const {id} = req.params;
  try {
   const deleteGame=  await deleteGameId(id)
    res.status(200).send(deleteGame);
    
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports={
    deleteGameById
}