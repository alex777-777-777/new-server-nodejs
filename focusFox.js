const axios = require("axios");
const postDataToCRMFocusFox = (d) => {
  const url = `https://ighosty.org/api/ext/add.json?id=178-af935b6dbc75e56bd70dd944512aba33`;
  const data = {
    id: d.id,
    flow: "178-af935b6dbc75e56bd70dd944512aba33",
    offer: d.offerId,
    ip: d.ip,
    name: d.name,
    last: d.name,
    phone: d.phone,
    email: d.email,
    country: d.geo,
    comment:d.answer
  };
  const requestOptions = {
    method: "post",
    url: url,
    data: data,
  };
  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};
module.exports = {postDataToCRMFocusFox};
