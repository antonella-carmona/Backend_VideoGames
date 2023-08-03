const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Favorite', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
    VideogameId: {
      type: DataTypes.STRING, // Cambiar el tipo de dato a STRING para aceptar UUID y números
      allowNull: false,
    },
   
  },
  {timestamps: false, freezeTableName:true}
  );
};

//freezeTableName:true //se asegura de que el nombre de la tabla sea "Favorite" sin pluralizar.