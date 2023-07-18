const { postDataToCrmAdscobar } = require("./requests/adscobar.js");
const { postDataToCrmCoinvista } = require("./requests/coinVista.js");
const { postDataToCrmGlc } = require("./requests/glc.js");
const { postDataToCrmHellLeads } = require("./requests/hellLeads.js");
const { postDataToCrmTssuccess } = require("./requests/tsSuccess.js");
const { postDataToCRMVikTeam } = require("./requests/vikTeam.js");
const {postDataToCrmСelineMarketing} = require("./requests/сelineMarketing.js");
const {postDataToCrmFranklin} = require("./requests/franklin.js");
const {postDataToCrmMccraft } = require("./requests/mccraft.js");
const {postDataToCrmMccraftNight } = require("./requests/mccraftnight.js");
const {postDataToCrmPafnet} = require("./requests/pafnet.js");
class postController {
  async glc(req, res) {
    try {
      const response = await postDataToCrmGlc(req.body);
      console.log(response);
      res.json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
      async pafnet(req, res) {
    try {
      const response = await postDataToCrmPafnet(req.body);
      console.log(response);
      res.json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
  } async franklin(req, res) {
    try {
      const response = await postDataToCrmFranklin(req.body);
      console.log(response);
      res.json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
  } async mccraft(req, res) {
    try {
      const response = await postDataToCrmMccraft(req.body);
      console.log(response);
      res.json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
  
  } async mccraftnight(req, res) {
    try {
      const response = await postDataToCrmMccraftNight(req.body);
      console.log(response);
      res.json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async adscobar(req, res) {
    try {
      const response = await postDataToCrmAdscobar(req.body);
      console.log(response);

      res.json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async coinvista(req, res) {
    try {
      const response = await postDataToCrmCoinvista(req.body);
      console.log(response.data);
      res.json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async celineMatketing(req, res) {
    try {
      const response = await postDataToCrmСelineMarketing(req.body);
      console.log(response.data);
      res.json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async hellleads(req, res) {
    try {
      const response = await postDataToCrmHellLeads(req.body);
      console.log(response);
      res.json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async tssuccess(req, res) {
    try {
      const response = await postDataToCrmTssuccess(req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async vikteam(req, res) {
    try {
      const response = await postDataToCRMVikTeam(req.body);
      console.log(response);
      //res.end("data edding");
      res.setHeader("Content-Type", "application/json");
      res.json(response.data);
    } catch (error) {
      res.json({ message: "Error" });
    }
  }
}
const reqController = new postController();
module.exports = {
  reqController,
};
