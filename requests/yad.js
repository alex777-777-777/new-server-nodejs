const axios = require("axios");
const postDataToCRMYAD = (d) => {
  const url = `https://yad.rip/api/ext/add.json?id=231-5a541467977f587410b91b3e6f90f3ed`;
  const data = {
    id: d.id,
    flow: "178-af935b6dbc75e56bd70dd944512aba33",
    offer: d.offerId,
    ip: d.ip,
    name: d.name,
    last: d.last,
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
module.exports = {postDataToCRMYAD};
