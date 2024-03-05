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

  router.post('/benefityesno-answer', function(request, response) {

    var country = request.session.data['benefityesno']
    if (country == "yes"){
        response.redirect("/v3/checker/relationship")
    } else {
        response.redirect("/v3/checker/benefits-partner")
    }
})

router.post('/benefit-partner', function(request, response) {

    var country = request.session.data['benefitpartner']
    if (country == "yes"){
        response.redirect("/v3/checker/relationship")
    } else {
        response.redirect("/v3/checker/no-qb")
    }
})

router.post('/their-relationship-answer', function(request, response) {

  var relationship = request.session.data['theirrelationship']
  if (relationship == "partner"){
      response.redirect("/v3/checker/over-18")
  } else if (relationship == "child"){
        response.redirect("/v3/checker/surviving-partner")
  } else if (relationship == "parent"){
        response.redirect("/v3/checker/how-old")
  } else {
      response.redirect("/v3/checker/no-journey")
  }
})

router.post('/answer-surviving-partner', function(request, response) {

  var partner = request.session.data['survivingpartner']
  if (partner == "yes"){
      response.redirect("/v3/checker/childparent-not-eligible")
  } else {
      response.redirect("/v3/checker/surviving-ifm")
  }
})

router.post('/how-old-answer', function(request, response) {

  var howold = request.session.data['howold']
  if (howold == "18"){
      response.redirect("/v3/checker/surviving-partner")
  } else if (howold == "16to17"){
        response.redirect("/v3/checker/surviving-partner")
  } else if (howold == "0to15"){
        response.redirect("/v3/checker/surviving-ifm")
  } else {
      response.redirect("/v3/checker/parents")
  }
})

}