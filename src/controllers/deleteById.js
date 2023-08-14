const {Videogame, Genres} = require("../db")

const deleteGameId = async (id)=>{
  await Videogame.destroy({
    where: {
        id: id
    }
  })

  return { success: true, deleteId: id };
}

module.exports={
    deleteGameId
}