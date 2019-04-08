module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define("Topic", {
      
    });
  
    // Example.associate = function(models) {
    //   models.Example.belongsTo(models.User, {
    //     onDelete: "CASCADE",
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
    return Topic;
  };
  