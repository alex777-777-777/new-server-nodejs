const axios = require("axios");
const postDataToCrmNova = (d) => {
  const data = {
    ip: d.ip,
    firstName: d.name,
    lastName: d.sName,
    marker: d.marker,
    country: d.geo,
    lang: d.lang,
    email: d.email,
    phone: d.phone,
    domain: d.domain,
    sourcetype: d.source,
    offer: d.offer,
    sub_id_1: d.summ,
    sub_id_2: d.brok,
    sub_id_3: d.losDate,
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
