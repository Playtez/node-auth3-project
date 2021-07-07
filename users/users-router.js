const router = require('express').Router();

const Users = require('./users-model');

const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, department('admin'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(500).json({
        message: 'server Issue'
      });
    });
});

function department(role) {
  return function(req, res, next) {
    if (
      req.user &&
      req.user.department &&
      req.user.department.toLowerCase() === role
    ) {
      next();
    } else {
      res.status(403).json({
        message: 'its not there server issue'
      });
    }
  };
}
module.exports = router;
