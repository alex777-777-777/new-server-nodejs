const axios = require("axios");
const postDataToCrmNova = (d) => {
  const data = {
    ip: d.ip,
    firstName: d.name,
    lastName: d.sName,
    marker: d.marker,
    country: d.geo,
    lang: d.lang,
    email: d.mail,
    phone: d.phone,
    domain: d.domain,
    sourcetype: d.source,
    offer: d.offer,
  };

   const requestOptions = {
    method: "post",
    url:  "https://nova.api.vibero.tech/api/lead",
    data: data,
  };
  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};
module.exports = {postDataToCrmNova};
