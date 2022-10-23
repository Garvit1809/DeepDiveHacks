const FishSpecies = require('../models/fishSpeciesModel');
const NewFishSpecies = require('../models/newFishSpeciesModel');
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

  const fishData = {
    healthBenefits: [],
    about:
      'White hake, also known as mud hake, are a species of groundfish that live in the deeper northwestern parts of the Atlantic Ocean.&nbsp;They are often compared to Atlantic cod and haddock in their physical appearance and taste.',
    habitat:
      'White hake are groundfish, meaning they live near the ocean bottom.&nbsp;White hake prefer areas with sandy or muddy bottoms.White hake live in relatively deep waters, typically at least 80 meters below sea level.',
    habitatImpacts:
      'Area closures and gear restrictions protect habitats that are affected by some kinds of trawl gear.',
    imageGallery: [
      {
        _id: '6354f53a4f08b607c18e33be',
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/white%20hake_Calvin%20Alexander_1.jpg',
        alt: 'White hake in sampling basket aboard research vessel',
        title: 'White hake in sampling basket. Photo credit: Calvin Alexander',
      },
      {
        _id: '6354f53a4f08b607c18e33bf',
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/white%20hake_Dave%20McElroy.jpg',
        alt: 'Scientist measuring white hake on research vessel',
        title: 'White hake on measuring board. Photo credit: Dave McElroy',
      },
      {
        _id: '6354f53a4f08b607c18e33c0',
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/White%20hake%20MD%20Dept%20Natural%20Resources.jpg',
        alt: 'Recreational angler aboard boat with white hake',
        title: 'Recreational angler with white hake. Photo credit: MD Dept. of Natural Resources',
      },
      {
        _id: '6354f53a4f08b607c18e33c1',
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/White%20Hake%20Dish%20-%20iStock.jpg',
        alt: 'White hake dish with tomato sauce',
        title: 'White hake dish.  Photo credit: iStock',
      },
      {
        _id: '6354f53a4f08b607c18e33c2',
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/White%20Hake_Stephen%20Luk_New%20England%20Aquarium.jpg',
        alt: 'White hake in a tank at the New England Aquarium',
        title: 'White hake at New England Aquarium. Photo credit: Stephen Luk',
      },
    ],
    locations: [
      'White hake are found in the northwest Atlantic Ocean from Newfoundland to southern New England.',
      'White hake are groundfish that live their adult lives in depths of a few metres to almost 1000 metres.',
    ],
    management: null,
    NOAAFisheriesRegion: 'Greater Atlantic',
    population: 'Significantly below target population level. A rebuilding plan is in place.',
    populationStatus: [
      'According to the 2019 stock assessment, white hake is overfished&nbsp;but&nbsp;not subject to overfishing. Summary stock assessment information can be found on <a href="https://www.st.nmfs.noaa.gov/stocksmart?app=browse_by_stock&amp;stockid=10518"',
    ],
    scientificName: 'Urophycis tenuis',
    speciesAliases: ['mud hake, Boston hake'],
    speciesIllustrationPhoto: [
      {
        _id: '6354f53a4f08b607c18e33c3',
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Hake_White_NB_W_0.png',
        alt: 'Illustration of white hake. Credit: Jack Hornady.',
        title: '',
      },
    ],
    speciesName: 'White Hake',
    availability: 'Year-round',
    biology: [
      ' White hake can grow up to 53 inches and weigh up to 49 pounds.',
      'White hake eggs are buoyant, and larval and early juvenile fish live higher in the water column than adult fish.',
      'White hake settle to the bottom when they are about 2 months old.',
      'Adult white hake typically prefer deeper water than juveniles.',
      'White hake move inshore to shallower waters in the summer and move offshore to deeper waters during the winter.',
      'Male white hake are usually smaller than females.',
      'Adult white hake primarily prey on other bottom-dwelling organisms, such as squid, crustaceans, and small bony fish.',
    ],
    calories: 90,
    carbohydrate: '0 g',
    cholesterol: '67 mg',
    fiber: '0 g',
    color: null,
    fishingRate: 'At recommended level.',
    harvest: ['There is no minimum fish size limit for white hake, and the recreational bag limit is unlimited.'],
    harvestType: 'Wild',
    healthBenifits: ['Great source of lean', 'healthy protein and rich in vitamins'],
    physicalDescription: [
      'White hake have a large mouth that extends back below their eyes.',
      'White hake have one anal fin and two dorsal fins.',
      "The first dorsal fin is tall and triangular, and the second is lower, rounded, and extends almost to the fish's tail.",
      'The third fin ray on the first (triangular) dorsal fin is elongated and extends much higher than the rest of the fin.',
      'White hake are a member of the cod order and have a barbel (whisker) on their chin.',
      'White hake vary in color.',
      'Most adults range from purplish-brown to golden-brown on their back and sides, and they have a yellowish-white belly speckled with small black spots.',
    ],
    protein: '18.31 g',
    quote:
      'Although populations are below target levels, U.S. wild-caught white hake is still a smart seafood choice because it is sustainably managed under a rebuilding plan that allows limited harvest under U.S. regulations.',
    saturatedFattyAcids: '0.247 g',
    selenium: '32.1 mcg',
    servingWeight: '100 g (raw)',
    servings: 1,
    sodium: '72 mg',
    source: 'White hake is wild-caught from Maine to southern New England.',
    sugars: '0 g',
    totalFat: '1.31 g',
    taste: 'White hake has an almost sweet yet mild taste.',
    texture: 'White hake has a soft, delicate texture that does not stand up well to freezing.',
    coordinates: [
      {
        _id: '6354f53a4f08b607c18e33c4',
        type: 'Point',
        coordinates: [39.630746, -70.927232],
      },
    ],
  };
  const newFishSpecies = await FishSpecies.create(fishData);

  res.status(201).json({
    status: 'success',
    data: newFishSpecies,
  });
});

/**
 * @function - files a new fish to the researchers
 * @return - { status }
 */
exports.fileNewFish = catchAsync(async (req, res) => {
  const { fishDetails } = req.body;

  await NewFishSpecies.create({ ...fishDetails });

  res.status(201).json({
    status: 'success',
  });
});
