const md5 = require("md5");
const axios = require("axios");

const postDataToCrmWinex = (d) => {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1000000, 99999999);
  const api_key = "1rmNxTdyIBXAYmHN";
  const hash_key = md5(api_key + rndInt);

  const data = new URLSearchParams({
    key: hash_key,
    rand_param: rndInt,
    affiliate_id: "GLC",
    first_name: d.name,
    second_name: d.sName,
    phone: d.phone,
    email: d.email,
    role_template_id: 1,
    country: d.geo,
    autologin: 1,
    create_trader: 1,
    status_id: 1,
    client_desk_id: 1,
    campaign_id: d.land,
    country_id: 4,
  });
  const requestOptions = {
    method: "post",
    url: `https://admin.winexasset.cc/api/v_2/leadgen/client/create`,
    data: data,
  };

  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};

module.exports = { postDataToCrmWinex };
