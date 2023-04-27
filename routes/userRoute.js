const express =require("express");
const router = express.Router();
const User = require("../models/userModel"); 
const Inventory = require("../models/inventoryModel");

router.route("/register").post((req,res)=> {
  const name = req.body.name;
  const email = req.body.email;
  const pass = req.body.pass;
  const type = req.body.type;
  const newUser = new User({
    name,
    email,
    pass,
    type
  });
  
  newUser.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving user");
    } else {
      res.status(200).send("User saved successfully");
    }
  });
});

router.route("/findUser").get((req,res)=>{
  console.log(req.query);
  const query = { email : req.query.email };
  
  User.findOne(query)
    .then((foundUser) => {
      if (foundUser) {
        res.json(foundUser);
        console.log(foundUser);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error finding user");
    });
});

router.route("/getItems").get((req,res)=>{
  console.log(req.query);
  const query = { name: req.query.name };
  
  Inventory.findOne(query)
    .then((foundInventory) => {
      if (foundInventory) {
        res.json(foundInventory);
        console.log(foundInventory);
      } else {
        res.status(404).send("Inventory not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error finding inventory");
    });
});

module.exports = router;
