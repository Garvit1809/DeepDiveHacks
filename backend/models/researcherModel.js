const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const researcherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  role: {
    type: String,
    enum: ['admin', 'researcher', 'lead-researcher'],
    default: 'researcher',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

// -------------------------------
// Methods
researcherSchema.methods.isInputPasswordCorrect = async (inputPassword, password) =>
  await bcrypt.compare(inputPassword, password);

// -------------------------------
// Query Middlewares

researcherSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

const Researcher = mongoose.model('Researcher', researcherSchema);

module.exports = Researcher;
