const Controller      = require(`../controllers/poolCards`);


module.exports = app => {
  // View master card sub cards
  app.get('/api/poolcards',Controller.getPoolCards);
  app.get('/api/poolcards/:id', Controller.subCards);
  app.post('/api/poolcards',Controller.addPoolCard);
  app.delete('/api/poolcards/:id', Controller.removePoolCard);
};
