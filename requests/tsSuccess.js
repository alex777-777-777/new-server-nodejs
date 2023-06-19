const axios = require("axios");
const postDataToCrmTssuccess = (d) => {
  const data = {
    token: "Bms3DQEd9Ce8TWRykZxMKwzXcnP2aH",
    method: "registration",
    user: {
      first_name: d.name,
      last_name: "test",
      email: d.email,
      phone: d.phone,
      campaign_name: "Amazon",
      country_iso: d.geo,
      password: "sdawedsad",
      _comment: d.answer,
      source_id: 1,
    },
  };

  const config = {
    method: "post",
    url: "https://api.tssuccess.top",

    data: data,
  };

  return axios(config)
    .then((res) => res)
    .catch((err) => err);
};
module.exports = { postDataToCrmTssuccess };
