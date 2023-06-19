const axios = require("axios");
const postToCRMTrafficSpace = (d) => {
  const url = `https://pluton-api.store/api/v2/leads`;

  const data = new URLSearchParams({
    email: d.email,
    firstName: d.name,
    lastName: d.name,
    password: "Pas21word2",
    phone: d.phone,
    ip: d.ip,
    custom1: d.answer,
    offerName: "Tesla",
  });
  const requestOptions = {
    method: "post",
    url: url,
    data: data,
    headers: {
      "Api-Key": "39E6CC06-116D-5D18-8AED-DC5B7E47BD2F",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};
module.exports = { postToCRMTrafficSpace };
