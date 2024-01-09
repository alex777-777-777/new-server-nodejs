const axios = require("axios");
const postDataToCrmNova2 = (d) => {
  const data = {
    ip: d.ip,
    firstName: d.name,
    lastName: d.sName,
    marker: d.marker,
    country: d.geo,
    lang: d.lang,
    email: d.email,
    cabinet:d.cabinet,
    phone: d.phone,
    domain: d.domain,
    sourcetype: d.source,
    description:d.description,
    offer: d.offer,
    sub_id_1: d.summ,
    sub_id_2: d.brok,
    sub_id_3: d.losDate,
  };

   const requestOptions = {
    method: "post",
    url:  "https://api.brokerlawyer.net/new-crm.php",
    data: data,
  };
  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};
module.exports = {postDataToCrmNova2};
