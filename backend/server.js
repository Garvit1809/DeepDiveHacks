const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
mongoose.connect(process.env.DATABASE_URI);

const app = require('./app');

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
