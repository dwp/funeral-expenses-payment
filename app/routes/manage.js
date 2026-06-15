module.exports = function (router) {

// GENERIC NEXT PAGE ELEMENT

// router.post('*', function (req, res, next) {
//   console.log(req.body);
//   if (req.body['next-page']) {
//     res.redirect(req.body['next-page']);
//   } else {
//     next();
//   }
// });

// Is there any money to help pay for the funeral?

  router.post('/money-answer-manage', function(request, response) {

    var money = request.session.data['moneyavailable']
    if (money == "yes"){
        response.redirect("/manage/money/type")
    } else {
        response.redirect("/manage/tasklist")
    }
  }) 

  // Is the claimant using a funeral director?

  router.post('/funeral-director-answer-manage', function(request, response) {

    var director = request.session.data['director']
    if (director == "no"){
        response.redirect("/manage/payee/claimant-bank")
    } else {
        response.redirect("/manage/payee/director-details")
    }
  }) 

  // Who do you want to pay?

  router.post('/who-to-pay-answer-manage', function(request, response) {

    var payee = request.session.data['whotopay']
    if (payee == "claimant"){
        response.redirect("/manage/payee/claimant-bank")
    } else {
        response.redirect("/manage/payee/director-details")
    }
  }) 

    // Make payment now?

    router.post('/make-payment-answer-manage', function(request, response) {

      var payment = request.session.data['makepayment']
      if (payment == "yes"){
          response.redirect("/manage/payment/send-payment")
      } else {
          response.redirect("/manage/tasklist")
      }
    }) 

        // Make payment now?

        router.post('/make-payment-answer-single-manage', function(request, response) {

          var payment = request.session.data['makepayment']
          if (payment == "yes"){
              response.redirect("/manage/payment/single/send-payment")
          } else {
              response.redirect("/manage/tasklist")
          }
        }) 


    // Eligibility filter question

  router.post('/eligibility-filter-manage', function(request, response) {

    var eligible = request.session.data['eligibilefilter']
    if (eligible == "yes"){
        response.redirect("/manage/eligibility/relationship")
    } else {
        response.redirect("/manage/eligibility/disallow-reason")
    }
  }) 

   // Why are you disallowing this claim?

      router.post('/disallow-reason-manage', function(request, response) {

        var disallow = request.session.data['disallowreason']
        if (disallow == "Claimant is not the responsible person"){
            response.redirect("/manage/eligibility/why-not-responsible")


        } else if (disallow == "None of these apply, claimant is eligible") {
        response.redirect("/manage/eligibility/relationship")

        } else {
            response.redirect("/manage/eligibility/about-to-disallow")
        }
      }) 


    // Registration - Update conact details

            router.post('/check-details-answer-manage', function(request, response) {

              var updatenumber = request.session.data['updatenumber']
              if (updatenumber == "appointee"){
                  response.redirect("/manage/reg/appointee-name")
              } else {
                  response.redirect("/manage/reg/partner")
              }
            })     
      
     // Registration a partner of claimant 

     router.post('/partner-answer-manage', function(request, response) {

      var partner = request.session.data['partner']
      if (partner == "yes"){
          response.redirect("/manage/reg/partner-search")
      } else {
          response.redirect("/manage/reg/deceased-search")
      }
    }) 

      // Registration - is deceased a child?

      router.post('/is-deceased-a-child-manage', function(request, response) {

        var deceasedchild = request.session.data['deceased-a-child']
        if (deceasedchild == "Yes"){
            response.redirect("/manage/reg/child-details")
        } else {
            response.redirect("/manage/reg/deceased-details")
        }
      }) 

        // Deceased task - Are you able to find deceased Nino?

            router.post('/trace-nino-answer-manage', function(request, response) {

              var tracenino = request.session.data['trace-nino']
              if (tracenino == "No"){
                  response.redirect("/manage/deceased/why-not-available")
              } else {
                  response.redirect("/manage/deceased/search")
              }
            }) 

                    // Deceased task - Are you able to find deceased Nino?

                    router.post('/trace-nino-answer-manage-c', function(request, response) {

                      var tracenino = request.session.data['trace-nino']
                      if (tracenino == "No"){
                          response.redirect("/manage/c/deceased/why-not-available")
                      } else {
                          response.redirect("/manage/c/deceased/search")
                      }
                    }) 

}