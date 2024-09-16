const path = require('path');
module.exports = (filepath) => {
  const newPath = path.join(require.main === undefined ? process.env.LAMBDA_TASK_ROOT : path.resolve('./'), filepath);
  return require(newPath);
};