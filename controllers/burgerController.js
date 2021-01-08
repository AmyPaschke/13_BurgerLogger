let express = require("express");

let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

//create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//add a burger
router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
    console.log(req.body);
    res.json({ id: result.insertId });
  });
});

//update a burger
router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne("devoured", 1, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//delete a burger
router.delete("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
