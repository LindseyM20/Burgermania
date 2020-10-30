// const { Router } = require("express");
const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    // const hbsObject = {
    //   burgers: data
    // };
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name"], [req.body.burger_name], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
