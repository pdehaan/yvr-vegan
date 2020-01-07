const { array } = require("@hapi/joi").types();
const restaurant = require("./restaurant.schema");

module.exports = array.items(restaurant);
