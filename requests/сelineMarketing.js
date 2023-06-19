const axios = require("axios");
const postDataToCrmСelineMarketing = (d) => {
  const url = `https://network.celine-marketing.de/api/signup/procform`;
  const data = JSON.stringify({
    ai: d.ai,
    ci: "1",
    gi: d.geo,
    userip: d.ip,
    firstname: d.name,
    lastname: d.name,
    email: d.email,
    password: "123456Aa",
    phone: d.phone,
    so: d.land,
    sub: "FreeParam",
    MPC_1: d.id,
    MPC_2: "FreeParam",
    MPC_3: "FreeParam",
    MPC_4: "FreeParam",
    MPC_5: "FreeParam",
    MPC_6: "FreeParam",
    MPC_7: "FreeParam",
    MPC_8: "FreeParam",
    MPC_9: "FreeParam",
    MPC_10: "FreeParam",
  });

  const requestOptions = {
    method: "post",
    url: url,
    headers: {
      "x-trackbox-username": "Alex",
      "x-trackbox-password": "xSdW7dwI0P",
      "x-api-key": "2643889w34df345676ssdas323tgc738",
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};
module.exports = { postDataToCrmСelineMarketing };
