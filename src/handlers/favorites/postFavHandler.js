const postFavControllers = require('../../controllers/favorites/postFavControllers')

const postFavHandler = async (req,res)=>{
 
  const {VideogameId} = req.body;

  const source = isNaN(VideogameId) ? "BDD" : "API"

  console.log("Handler queeeeeeeeee->", VideogameId)
    try {
     
      const newFav = await postFavControllers(VideogameId, source);
      return res.status(200).send(newFav);

    } catch (error) {
      return res.status(400).send(error.message);
  };

}

module.exports={postFavHandler};   