//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// GENERIC NEXT PAGE ELEMENT
router.post('*', function (req, res, next) {
    console.log(req.body);
    if (req.body['next-page']) {
      res.redirect(req.body['next-page']);
    } else {
      next();
    }
  });
  
    // TEST ROUTE RELATIONSHIP INELIGBLE JOURNEY

    router.post('/relationship-answer1', function(request, response) {

      var relationship = request.session.data['relationship1']
      if (relationship == "Child"){
          response.redirect("/a/over-18")
      } else {
          response.redirect("/a/about-the-deceased")
      }
  })
  
  // TEST ROUTE RELATIONSHIP

  router.post('/relationship-answer', function(request, response) {

    var relationship = request.session.data['relationship']
    if (relationship == "Parent"){
        response.redirect("/eligibility/over-18")
    } else {
        response.redirect("/eligibility/about-the-deceased")
    }
})

  // TEST ROUTE BENFITS YOU

  router.post('/benefits-you-answer', function(request, response) {

    var benefits = request.session.data['benefits']
    if (benefits == "No"){
        response.redirect("/eligibility/partner")
    } else {
        response.redirect("/eligibility/date-of-funeral")
    }
})

  // TEST ROUTE BENFITS PARTNER

  router.post('/benefits-partner-answer', function(request, response) {

    var benefits = request.session.data['benefitspartner']
    if (benefits == "No"){
        response.redirect("/eligibility/kick-out-no-qb")
    } else {
        response.redirect("/eligibility/about-your-partner")
    }
})

  // TEST ROUTE BENFITS IFM

  router.post('/benefits-ifm-answer', function(request, response) {

    var benefits = request.session.data['benefitsifm']
    if (benefits == "No"){
        response.redirect("/responsibility/exemption-list-ifm")
    } else {
        response.redirect("/responsibility/add-relative")
    }
})