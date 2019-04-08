module.exports = (sequelize, DataTypes) => {
    const Thread = sequelize.define("Thread", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }    
    });

    Thread.associate = models => {
        models.Thread.hasMany(models.Post);
      }; 
         
    return Thread;
  };
  
