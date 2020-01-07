module.exports = {
  restaurant: require("./restaurant.schema"),
  restaurants: require("./restaurants.schema"),
  validate(schema, data, opts = {}) {
    return schema.validate(data, $mergeOpts(opts));
  },
  async validateAsync(schema, data, opts = {}) {
    return schema.validateAsync(data, $mergeOpts(opts));
  }
};

function $mergeOpts(opts = {}) {
  // NOTE: By default, all schema fields are required!
  return Object.assign({}, { abortEarly: false, presence: "required" }, opts);
}
