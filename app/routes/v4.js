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

// ARE YOU THE PARTNER

router.post('/partner-answer', function(request, response) {

  var relationship = request.session.data['partner']
  if (relationship == "yes"){
      response.redirect("/v4/eligibility/same-address")
  } else {
      response.redirect("/v4/eligibility/cannot-use-private-beta")
  }
})

// WERE YOU LIVING TOGETHER

router.post('/same-address-answer', function(request, response) {

  var address = request.session.data['sameaddress']
  if (address == "no"){
      response.redirect("/v4/eligibility/cannot-use-private-beta")
  } else {
      response.redirect("/v4/eligibility/responsible-for-paying")
  }
})

// RESPONSIBLE FOR PAYING

router.post('/responsible-answer', function(request, response) {

  var responsible = request.session.data['responsibleforpaying']
  if (responsible == "yes"){
      response.redirect("/v4/eligibility/where-you-live")
  } else {
      response.redirect("/v4/eligibility/not-responsible")
  }
})

// WHERE YOU LIVE

router.post('/whereyoulive-answer', function(request, response) {

  var country = request.session.data['whereyoulive']
  if (country == "scotland"){
      response.redirect("/v4/eligibility/live-in-scotland")
//   } else if (country == "northern-ireland"){
//         response.redirect("/v4/eligibility/live-in-ni")
  } else if (country == "abroad"){
        response.redirect("/v4/eligibility/live-outside-uk")
  } else {
      response.redirect("/v4/eligibility/benefits")
  }
})

  // BENEFITS ANSWER

  router.post('/benefits-answer', function(request, response) {

    var benefits = request.session.data['benefits']
    if (benefits == "no"){
        response.redirect("/v4/eligibility/not-on-qb")
    } else {
        response.redirect("/v4/eligibility/usually-live-in-uk")
    }
})

  // DID THE DECEASED LIKE IN THE UK

  router.post('/deceaseduk-answer', function(request, response) {

    var deceaseduk = request.session.data['deceaseduk']
    if (deceaseduk == "no"){
        response.redirect("/v4/eligibility/deceased-outside-uk")
    } else {
        response.redirect("/v4/eligibility/date-of-funeral")
    }
})

  // FUNERAL IN UK

  router.post('/funeralinuk-answer', function(request, response) {

    var funeralinuk = request.session.data['funeralinuk']
    if (funeralinuk == "no"){
        response.redirect("/v4/eligibility/funeral-in-eea")
    } else {
        response.redirect("/v4/details/about-the-claimant")
    }
})

  // FUNERAL IN EEA

  router.post('/funeraleea-answer', function(request, response) {

    var funeraleea = request.session.data['funeraleea']
    if (funeraleea == "no"){
        response.redirect("/v4/eligibility/funeral-outside-uk")
    } else {
        response.redirect("/v4/details/about-the-claimant")
    }
})

  // FINANCIAL AFFAIRS

  router.post('/financial-affairs-answer', function(request, response) {

    var financialaffairs = request.session.data['financialaffairs']
    if (financialaffairs == "you"){
        response.redirect("/v4/money/bank-accounts")
    } else {
        response.redirect("/v4/funeral/start")
    }
})

  // MONEY IN BANK ACCOUNTS

  router.post('/bankaccounts-answer', function(request, response) {

    var bankaccounts = request.session.data['bankaccounts']
    if (bankaccounts == "yes"){
        response.redirect("/v4/money/exact-amount-bank-account")
    } else {
        response.redirect("/v4/money/isa")
    }
})

  // MONEY IN JOINT ACCOUNT

  router.post('/jointaccount-answer', function(request, response) {

    var jointaccount = request.session.data['jointaccount']
    if (jointaccount == "yes"){
        response.redirect("/v4/money/exact-amount-joint-account")
    } else {
        response.redirect("/v4/money/isa")
    }
})

  // IS PARTNER OTHER JOINT ACCOUNT HOLDER

  router.post('/partnerjointaccount-answer', function(request, response) {

    var partnerjointaccount = request.session.data['partnerjointaccount']
    if (partnerjointaccount == "no"){
        response.redirect("/v4/money/joint-account-transfer")
    } else {
        response.redirect("/v4/money/isa")
    }
})

  // MONEY TRANSFERRED TO OTHER JOINT ACCOUNT HOLDER

  router.post('/jointaccounttransfer-answer', function(request, response) {

    var jointaccounttransfer = request.session.data['jointaccounttransfer']
    if (jointaccounttransfer == "yes"){
        response.redirect("/v4/money/exact-amount-other-joint-account")
    } else {
        response.redirect("/v4/money/isa")
    }
})

  // MONEY IN ISAS

  router.post('/isas-answer', function(request, response) {

    var isas = request.session.data['isas']
    if (isas == "yes"){
        response.redirect("/v4/money/exact-amount-isa")
    } else {
        response.redirect("/v4/money/in-cash")
    }
})

  // MONEY IN CASH

  router.post('/cash-answer', function(request, response) {

    var cash = request.session.data['cash']
    if (cash == "yes"){
        response.redirect("/v4/money/exact-amount-cash")
    } else {
        response.redirect("/v4/money/plans-filter")
    }
})

  // PLANS FILTER QUESTION

  router.post('/plansfilter-answer', function(request, response) {

    var plansfilter = request.session.data['plansfilter']
    if (plansfilter == "no"){
        response.redirect("/v4/money/other-money")
    } else {
        response.redirect("/v4/money/workplace-pension")
    }
})

  // WORKPLACE PENSION

  router.post('/pension-answer', function(request, response) {

    var pension = request.session.data['pension']
    if (pension == "yes"){
        response.redirect("/v4/money/exact-amount-pension")
    } else {
        response.redirect("/v4/money/life-insurance")
    }
})

  // LIFE INSURANCE

  router.post('/lifeinsurance-answer', function(request, response) {

    var lifeinsurance = request.session.data['lifeinsurance']
    if (lifeinsurance == "yes"){
        response.redirect("/v4/money/exact-amount-insurance")
    } else {
        response.redirect("/v4/money/funeral-plan")
    }
})

  // FUNERAL PLAN

  router.post('/funeralplan-answer', function(request, response) {

    var funeralplan = request.session.data['funeralplan']
    if (funeralplan == "yes"){
        response.redirect("/v4/money/funeral-plan-cover-costs")
    } else {
        response.redirect("/v4/money/burial-club")
    }
})

  // FUNERAL PLAN COVER ANY OF THE FUNERAL COSTS

  router.post('/funeralplancover-answer', function(request, response) {

    var funeralplancover = request.session.data['funeralplancover']
    if (funeralplancover == "no"){
        response.redirect("/v4/money/funeral-plan-refund")
    } else {
        response.redirect("/v4/money/120-limit")
    }
})

  // FUNERAL PLAN REFUND

  router.post('/funeralplanrefund-answer', function(request, response) {

    var funeralplanrefund = request.session.data['funeralplanrefund']
    if (funeralplanrefund == "yes"){
        response.redirect("/v4/money/exact-amount-funeral-refund")
    } else {
        response.redirect("/v4/money/burial-club")
    }
})

  // BURIAL CLUB

  router.post('/burialclub-answer', function(request, response) {

    var burialclub = request.session.data['burialclub']
    if (burialclub == "yes"){
        response.redirect("/v4/money/exact-amount-burial-club")
    } else {
        response.redirect("/v4/money/armed-forces")
    }
})

  // AMRED FORCES

  router.post('/armedforces-answer', function(request, response) {

    var armedforces = request.session.data['armedforces']
    if (armedforces == "yes"){
        response.redirect("/v4/money/war-pension")
    } else {
        response.redirect("/v4/money/other-money")
    }
})

  // WAR PENSION

  router.post('/warpension-answer', function(request, response) {

    var warpension = request.session.data['warpension']
    if (warpension == "yes"){
        response.redirect("/v4/money/exact-amount-war-pension")
    } else {
        response.redirect("/v4/money/other-money")
    }
})

  // OTHER MONEY

  router.post('/othermoney-answer', function(request, response) {

    var othermoney = request.session.data['othermoney']
    if (othermoney == "yes"){
        response.redirect("/v4/money/exact-amount-other-money")
    } else {
        response.redirect("/v4/money/death-certificates")
    }
})

  // FUNERAL DIRECTOR

  router.post('/director-answer', function(request, response) {

    var director = request.session.data['director']
    if (director == "yes"){
        response.redirect("/v4/funeral/provider-details")
    } else {
        response.redirect("/v4/funeral/someone-else")
    }
})

  // SOMEONE ELSE ARRANGING 

  router.post('/someoneelse-answer', function(request, response) {

    var someoneelse = request.session.data['someoneelse']
    if (someoneelse == "yes"){
        response.redirect("/v4/funeral/provider-details")
    } else {
        response.redirect("/v4/funeral/used-money-from-deceased")
    }
})

 // BILL IN YOUR NAME 

router.post('/billinyourname-answer', function(request, response) {

    var billinyourname = request.session.data['billinyourname']
    if (billinyourname == "yes"){
        response.redirect("/v4/funeral/items-not-on-bill")
    } else if (billinyourname == "no"){
          response.redirect("/v4/funeral/arranged-on-your-behalf")
    } else {
        response.redirect("/v4/funeral/used-money-from-deceased")
    }
  })

   // USED MONEY FROM DECEASED TO PAY FUNERAL

router.post('/usedmoney-answer', function(request, response) {

    var usedmoney = request.session.data['usedmoney']
    if (usedmoney == "yes"){
        response.redirect("/v4/funeral/exact-amount-used-money")
    } else {
        response.redirect("/v4/funeral/claim-travel")
    }
})

   // CLAIM TRAVEL ANSWER

   router.post('/claimtravel-answer', function(request, response) {

    var claimtravel = request.session.data['claimtravel']
    if (claimtravel == "yes"){
        response.redirect("/v4/funeral/travel-expenses")
    } else {
        response.redirect("/v4/contact/start")
    }
})

}