const mongoose = require('mongoose');

const { Schema } = mongoose;

const counterSchema = new Schema({
  value: { type: Number, required: true, default: 2 },
});

counterSchema.statics.findOne = async function () {
  return await this.findOne();
};

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;
