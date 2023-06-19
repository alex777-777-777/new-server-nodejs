const axios = require("axios");
const postDataToCRMVikTeam = (d) => {
  const url = `https://cryptcrm.site/api/ext/add.json?id=68-52e3ee9191f6f135e68b689a135516a6`;
  const data = {
    id: d.id,
    flow: "68-52e3ee9191f6f135e68b689a135516a6",
    offer: d.offerId,
    ip: d.ip,
    name: d.name,
    last: d.name,
    phone: d.phone,
    email: d.email,
    country: d.geo,
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
module.exports = {postDataToCRMVikTeam};
