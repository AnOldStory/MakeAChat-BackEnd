module.exports = function(sequelize, Datatypes) {
  var Chats = sequelize.define("Chats", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Datatypes.INTEGER
    },
    room: {
      type: Datatypes.STRING(100)
    },
    author: {
      type: Datatypes.INTEGER
    },
    text: {
      type: Datatypes.STRING(1000)
    }
  });

  return Chats;
};
