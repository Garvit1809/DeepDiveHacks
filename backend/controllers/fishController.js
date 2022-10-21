const FishSpecies = require('../models/fishSpeciesModel');
const catchAsync = require('../utils/catchAsync');

/**
 * @function - gets all the fish species from the database
 * @return - { status (response status), results (total results), data }
 */
exports.getAllSpecies = catchAsync(async (req, res, next) => {
  const allSpecies = await FishSpecies.find({});

  res.status(200).json({
    status: 'success',
    results: allSpecies.length,
    data: allSpecies,
  });
});

/**
 * @function - gets a single species based on the id
 * @return - { status, data }
 */
exports.getOneSpecies = catchAsync(async (req, res, next) => {
  const { species: speciesId } = req.params;

  const fishSpecies = await FishSpecies.findById(speciesId);

  res.status(200).json({
    status: 'success',
    data: fishSpecies,
  });
});

/**
 * @function - creates a fish species
 * @return - { status, data (created fish) }
 */
exports.createFishSpecies = catchAsync(async (req, res) => {
  const { fishDetails } = req.body;

  const newFishSpecies = await FishSpecies.create({ ...fishDetails });

  res.status(201).json({
    status: 'success',
    data: newFishSpecies,
  });
});
