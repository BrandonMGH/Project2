module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define("Topic", {
      
    });
    
    Topic.associate = models => {
      models.Topic.hasMany(models.Thread);
      models.Topic.hasMany(models.Post);
    };

    return Topic;
  };

