const mongoose = require('mongoose');

const fishSchema = new mongoose.Schema({
  speciesName: String,
  habitat: String,
  habitatImpacts: String,
  imageGallery: {
    type: [
      {
        src: String,
        alt: String,
        title: String,
      },
    ],
    default: [],
  },
  locations: [String],
  depthFoundAt: {
    type: {
      lowerRange: Number,
      upperRange: Number,
    },
  },
  management: String,
  NOAAFisheriesRegion: String, // can be coordinates
  population: String,
  populationStatus: [String],
  scientificName: String,
  speciesAliases: [String],
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
  availability: String,
  biology: [String],
  calories: Number,
  carbohydrate: String,
  cholesterol: String,
  color: [String],
  totalFat: String,
  fiber: String,
  fishingRate: String,
  harvest: [String],
  harvestType: String,
  healthBenefits: [String],
  physicalDescription: [String],
  protein: String,
  quote: String,
  saturatedFattyAcids: String,
  selenium: String,
  servingWeight: String,
  servings: Number,
  sodium: String,
  source: String,
  sugars: String,
  taste: String,
  texture: String,
  // TODO:
  // Need to add coordinates
});

const FishSpecies = mongoose.model('FishSpecies', fishSchema);

module.exports = FishSpecies;
