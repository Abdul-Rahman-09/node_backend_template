const sampleMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] Sample middleware executed`);
  next();
};

export default sampleMiddleware;
