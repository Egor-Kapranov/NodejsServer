const Sequelize = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telephone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: Sequelize.INTEGER,
});

const Restaurant = sequelize.define("restaurants", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

const Table = sequelize.define("tables", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  table_position: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Review = sequelize.define("reviews", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comment: Sequelize.TEXT,
  com_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

const Reservations = sequelize.define("reservations", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  reserv_datetime: Sequelize.DATE,
});

User.hasMany(Review, { foreignKey: "user_id" });
User.hasMany(Reservations, { foreignKey: "user_id" });
Restaurant.hasMany(Review, { foreignKey: "restaurant_id" });
Restaurant.hasMany(Table, { foreignKey: "restaurant_id" });
Review.belongsTo(User, { foreignKey: "user_id" });
Review.belongsTo(Restaurant, { foreignKey: "restaurant_id" });
Reservations.belongsTo(User, { foreignKey: "user_id" });
Reservations.belongsTo(Restaurant, { foreignKey: "restaurant_id" });
Table.belongsTo(Restaurant, { foreignKey: "restaurant_id" });

module.exports = {
  User,
  Restaurant,
  Review,
  Reservations,
  Table,
};
