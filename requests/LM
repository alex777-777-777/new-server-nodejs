const axios = require("axios");
const postDataToCrmLM = (d) => {
  const url = `https://api.tdsgolions.com/leads/create.php?api_key=f0abf9905eb49babd84d80648e164636`;
  const data = {
     fname: d.name,
    lname: d.sName,
    email: d.email,
    phone: d.phone,
    country: d.geo,
    lang: d.lang,
    campaing_id: 225,
    pass: "123123",
    currency: "rub",
    c_cid: d.land,
    a_aid: "Test_a_aid",
    b_bid: "Test_b_bid",
    ip: d.ip,
    domain: "https://test.com",
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
module.exports = { postDataToCrmLM };
