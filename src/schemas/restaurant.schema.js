const { object, string, array, date } = require("@hapi/joi").types();
const uri = string.uri();

module.exports = object.keys({
  title: string,
  site: uri,
  permalink: string.optional(),
  date: date.optional(),
  addedDate: date,
  social: array.optional().items({
    url: uri,
    label: string.optional()
  }),
  locations: array.items(
    object.keys({
      label: string.optional().allow(""),
      address: string,
      address2: string.optional(),
      map: uri.optional(),
      phone: string.optional(),
      links: array.optional().items({
        url: uri,
        label: string.optional()
      })
    })
  )
});
