const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// Creates the router for the app.

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Exports routes for server.js to use.
module.exports = router;
