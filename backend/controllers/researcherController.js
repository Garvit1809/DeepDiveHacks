const Researcher = require('../models/researcherModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { signJwt, verifyJwt } = require('../utils/jwt');

/**
 * @function - creates a jwt token and sends it to client
 *
 * @param researcher - user
 * @param statusCode - status code for response
 * @param res - the response object
 *
 * @return { status, jwt, data }
 */
const createAndSendToken = (researcher, statusCode, res) => {
  const jwt = signJwt(researcher.id);

  // Remove unnecessary stuff for client
  researcher.password = undefined;
  researcher.__v = undefined;

  res.status(statusCode).json({
    status: 'success',
    jwt,
    data: {
      researcher,
    },
  });
};

/**
 * @function - sign up / hiring for researchers who have applied
 */
exports.hire = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || (!email && !password)) {
    return next(new AppError('Please provide all the details', 401));
  }

  const researcherDetails = { name, email, password };

  const researcher = await Researcher.create(researcherDetails);

  createAndSendToken(researcher, 201, res);
});

/**
 * @function - logs in a researcher/admin/user
 */
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide all the details', 401));
  }

  const researcher = await Researcher.findOne({ email }).select('+password');

  if (!researcher || !(await researcher.isInputPasswordCorrect(password, researcher.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  createAndSendToken(researcher, 200, res);
});

/**
 * @function - creates a protected route for users
 */
exports.protect = catchAsync(async (req, res, next) => {
  const { authorization } = req.headers;

  let token = '';
  if (authorization && authorization.startsWith('Bearer')) {
    token = authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in. Please login to get access', 401));
  }

  // validate token
  const { id, iat: jwtIssuedAt } = await verifyJwt(token);

  const researcher = await Researcher.findById(id);

  if (!researcher) {
    return next(new AppError('User belonging to this token does not exist', 401));
  }

  req.researcher = researcher;
  next();
});

/**
 * @function - middleware to restrict user from doing actions according to their roles
 * @param  {...any} roles = roles that you need to restrict to
 */
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }

    next();
  };
};
