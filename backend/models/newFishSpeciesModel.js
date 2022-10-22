const mongoose = require('mongoose');

const fishSchema = new mongoose.Schema({
  speciesName: String,
  locations: [String],
  speciesIllustrationPhoto: {
    type: [
      {
        src: String,
        alt: String,
        title: String,
      },
    ],
    required: [true, 'Please provide an illustration photo'],
  },
  color: [String],
  texture: String,
});

const NewFishSpecies = mongoose.model('NewFishSpecies', fishSchema);

module.exports = NewFishSpecies;
