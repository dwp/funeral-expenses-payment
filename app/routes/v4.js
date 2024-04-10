module.exports = function (router) {

// GENERIC NEXT PAGE ELEMENT
router.post('*', function (req, res, next) {
    console.log(req.body);
    if (req.body['next-page']) {
      res.redirect(req.body['next-page']);
    } else {
      next();
    }
  });

}