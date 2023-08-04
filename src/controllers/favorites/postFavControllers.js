const {Favorite, Videogame} = require("../../db") 
const { v4: uuidv4 } = require('uuid');



const postFavControllers= async (VideogameId)=>{ //recibe id del videgames
   console.log("volvio pepito", VideogameId)

   try {
      let formattedVideogameId = VideogameId; // Por defecto, consideramos que el "VideogameId" es un UUID válido

      // Verificamos si el "VideogameId" recibido es un número entero
      if (!isNaN(VideogameId)) {
        // Si es un número, lo convertimos al formato UUID
        formattedVideogameId = uuidv4();
      }
  
      // Ahora, crea el nuevo registro de Favorite asociado al Videogame correspondiente.
      const newFav = await Favorite.create({
         VideogameId: formattedVideogameId, // Usa el nombre correcto del campo, que debe ser "videogameId".
      });
  
      return newFav;           
    } catch (error) {
      throw new Error("Error al crear el registro de Favorite: " + error.message);
    }
  };
module.exports= postFavControllers;