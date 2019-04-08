module.exports = (sequelize, DataTypes) => {
    const Thread = sequelize.define("Thread", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Thread;
  };
  