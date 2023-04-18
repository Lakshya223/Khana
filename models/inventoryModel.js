const mongoose = require("mongoose");
const inventorySchema = {
  name: String,
  type: String,
  items: Object
}
const Inventory= mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;
