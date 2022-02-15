const router = require("express").Router();
const dotenv = require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stirpeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stirpeRes);
      }
    }
  );
});

module.exports = router;
