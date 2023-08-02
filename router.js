const { Router } = require("express");
const { reqController } = require("./reqController.js");

const router = new Router();

router.get("/", (req, res) => {
  res.json({ message: "server is working" });
});
router.post("/glc", reqController.glc);
router.post("/winex", reqController.winex);
router.post("/adscobar", reqController.adscobar);
router.post("/coinvista", reqController.coinvista);
router.post("/celinemarketing", reqController.celineMatketing);
router.post("/hleads", reqController.hellleads);
router.post("/tssuccess", reqController.tssuccess);
router.post("/vikteam", reqController.vikteam);
router.post("/franklin", reqController.franklin);
router.post("/mccraft", reqController.mccraft);
router.post("/mccraftnight", reqController.mccraft);
router.post("/pafnet", reqController.pafnet);
router.post("/focusFox", reqController.focusFox);

module.exports = {
  router,
};
