const fs = require('node:fs');
const FishSpecies = require('../models/fishSpeciesModel');

const importFishData = () => {
  console.log('Importing...');
  fs.readFile(`${__dirname}/dev-data.json`, 'utf-8', async (err, data) => {
    if (err) {
      console.log('FAILED TO UPLOAD');
      process.exit(0);
    }

    await FishSpecies.insertMany(data);
    console.log('SUCCESSFULLY ADDED DATA');
  });
};

const deleteFishData = async () => {
  await FishSpecies.deleteMany({});
  console.log('SUCCESSFULLY DELETED DATA');
};

if (process.argv[2] === '--import') importFishData();
if (process.argv[2] === '--delete') deleteFishData();
