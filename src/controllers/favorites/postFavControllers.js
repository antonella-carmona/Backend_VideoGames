const {Favorite, Videogame} = require("../../db") 



const postFavControllers= async (VideogameId)=>{ //recibe id del videgames
   console.log("volvio pepito", VideogameId)
   try {
      // Primero, verifica si el Videogame con el id proporcionado existe en la base de datos.
      // const videogame = await Videogame.findByPk(idVideogames);
  
      // if (!videogame) {
      //   throw new Error("El videogame con el id proporcionado no existe.");
      // }
  
      // Ahora, crea el nuevo registro de Favorite asociado al Videogame correspondiente.
      const newFav = await Favorite.create({
         VideogameId: VideogameId, // Usa el nombre correcto del campo, que debe ser "videogameId".
      });
  
      return newFav;           
    } catch (error) {
      throw new Error("Error al crear el registro de Favorite: " + error.message);
    }
  };
module.exports= postFavControllers;