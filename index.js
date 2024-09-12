const path = require('path');
const requireRoot = (destination) => {
  const newPath = path.join(require.main === undefined ? process.env.LAMBDA_TASK_ROOT : path.resolve('./'), destination);
  return require(newPath);// eslint-disable-line // eslint-disable-line
};
module.exports=requireRoot;