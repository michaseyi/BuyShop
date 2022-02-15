const paystack = require("paystack-api")(
  "sk_test_48e2f0901afd1cd4f90ead94108ee0e46cc20ff8"
);

const router = require("express").Router();

router.post("/payment", (req, res) => {
  const promise6 = paystack.transactions.verify({
    reference: req.body.reference,
  });

  promise6
    .then(function (response) {
      res.status(200).json(response);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

module.exports = router;
