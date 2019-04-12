module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        body: {
            type: DataTypes.TEXT,
            // allowNull: false,
        }
    });

    return Post;
  };