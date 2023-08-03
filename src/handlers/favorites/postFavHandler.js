const postFavControllers = require('../../controllers/favorites/postFavControllers')

const postFavHandler = async (req,res)=>{
 
  const {VideogameId} = req.body;

  let gameIdApi;
  let gameIdBdd;
  const source = isNaN(VideogameId) ? "BDD" : "API"
  const cualEs = source === "API" ? gameIdApi=VideogameId : gameIdBdd= VideogameId

  console.log("Handler queeeeeeeeee->", VideogameId)
    try {
     
      const newFav = await postFavControllers(gameIdApi, gameIdBdd);
      return res.status(200).send(newFav);

    } catch (error) {
      return res.status(400).send(error.message);
  };

}

module.exports={postFavHandler};   