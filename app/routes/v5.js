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

router.post('/partner-answer-v5', function(request, response) {

  var relationship = request.session.data['partner']
  if (relationship == "yes"){
      response.redirect("/v5/eligibility/same-address")
  } else {
      response.redirect("/v5/eligibility/cannot-use-private-beta")
  }
})

// WERE YOU LIVING TOGETHER

router.post('/same-address-answer-v5', function(request, response) {

  var address = request.session.data['sameaddress']
  if (address == "no"){
      response.redirect("/v5/eligibility/cannot-use-private-beta")
  } else {
      response.redirect("/v5/eligibility/responsible-for-paying")
  }
})

// RESPONSIBLE FOR PAYING

router.post('/responsible-answer-v5', function(request, response) {

  var responsible = request.session.data['responsibleforpaying']
  if (responsible == "yes"){
      response.redirect("/v5/eligibility/where-you-live")
  } else {
      response.redirect("/v5/eligibility/not-responsible")
  }
})

// WHERE YOU LIVE

router.post('/whereyoulive-answer-v5', function(request, response) {

  var country = request.session.data['whereyoulive']
  if (country == "abroad"){
    response.redirect("/v5/eligibility/live-outside-uk")
  } else if (country == "northern-ireland"){
        response.redirect("/v5/eligibility/live-in-ni")
  } else if (country == "scotland"){
        response.redirect("/v5/eligibility/live-in-scotland")
  } else {
      response.redirect("/v5/eligibility/benefits")
  }
})

  // BENEFITS ANSWER

  router.post('/benefits-answer-v5', function(request, response) {

    var benefits = request.session.data['benefits']
    if (benefits == "no"){
        response.redirect("/v5/eligibility/not-on-qb")
    } else {
        response.redirect("/v5/eligibility/usually-live-in-uk")
    }
})

  // DID THE DECEASED LIKE IN THE UK

  router.post('/deceaseduk-answer-v5', function(request, response) {

    var deceaseduk = request.session.data['deceaseduk']
    if (deceaseduk == "no"){
        response.redirect("/v5/eligibility/deceased-outside-uk")
    } else {
        response.redirect("/v5/eligibility/funeral-taken-place")
    }
})

  // FUNERAL IN UK

  router.post('/funeralinuk-answer-v5', function(request, response) {

    var funeralinuk = request.session.data['funeralinuk']
    if (funeralinuk == "no"){
        response.redirect("/v5/eligibility/funeral-in-eea")
    } else {
        response.redirect("/v5/details/about-the-claimant")
    }
})

  // FUNERAL IN EEA

  router.post('/funeraleea-answer-v5', function(request, response) {

    var funeraleea = request.session.data['funeraleea']
    if (funeraleea == "no"){
        response.redirect("/v5/eligibility/funeral-outside-uk")
    } else {
        response.redirect("/v5/details/about-the-claimant")
    }
})

  // FINANCIAL AFFAIRS

  router.post('/financial-affairs-answer-v5', function(request, response) {

    var financialaffairs = request.session.data['financialaffairs']
    if (financialaffairs == "you"){
        response.redirect("/v5/money/bank-accounts")
    } else {
        response.redirect("/v5/funeral/start")
    }
})

  // MONEY IN BANK ACCOUNTS

  router.post('/bankaccounts-answer-v5', function(request, response) {

    var bankaccounts = request.session.data['bankaccounts']
    if (bankaccounts == "yes"){
        response.redirect("/v5/money/exact-amount-bank-account")
    } else {
        response.redirect("/v5/money/isa")
    }
})

  // MONEY IN JOINT ACCOUNT

  router.post('/jointaccount-answer-v5', function(request, response) {

    var jointaccount = request.session.data['jointaccount']
    if (jointaccount == "yes"){
        response.redirect("/v5/money/exact-amount-joint-account")
    } else if (jointaccount == "all"){
        response.redirect("/v5/money/partner-joint-account")    
    } else {
        response.redirect("/v5/money/isa")
    }
})

  // IS PARTNER OTHER JOINT ACCOUNT HOLDER

  router.post('/partnerjointaccount-answer-v5', function(request, response) {

    var partnerjointaccount = request.session.data['partnerjointaccount']
    if (partnerjointaccount == "no"){
        response.redirect("/v5/money/joint-account-transfer")
    } else {
        response.redirect("/v5/money/isa")
    }
})

  // MONEY TRANSFERRED TO OTHER JOINT ACCOUNT HOLDER

  router.post('/jointaccounttransfer-answer-v5', function(request, response) {

    var jointaccounttransfer = request.session.data['jointaccounttransfer']
    if (jointaccounttransfer == "yes"){
        response.redirect("/v5/money/exact-amount-other-joint-account")
    } else {
        response.redirect("/v5/money/isa")
    }
})

  // MONEY IN ISAS

  router.post('/isas-answer-v5', function(request, response) {

    var isas = request.session.data['isas']
    if (isas == "yes"){
        response.redirect("/v5/money/exact-amount-isa")
    } else {
        response.redirect("/v5/money/in-cash")
    }
})

  // MONEY IN CASH

  router.post('/cash-answer-v5', function(request, response) {

    var cash = request.session.data['cash']
    if (cash == "yes"){
        response.redirect("/v5/money/exact-amount-cash")
    } else {
        response.redirect("/v5/money/plans-filter")
    }
})

  // PLANS FILTER QUESTION

  router.post('/plansfilter-answer-v5', function(request, response) {

    var plansfilter = request.session.data['plansfilter']
    if (plansfilter == "no"){
        response.redirect("/v5/money/other-money")
    } else {
        response.redirect("/v5/money/workplace-pension")
    }
})

  // WORKPLACE PENSION

  router.post('/pension-answer-v5', function(request, response) {

    var pension = request.session.data['pension']
    if (pension == "yes"){
        response.redirect("/v5/money/exact-amount-pension")
    } else {
        response.redirect("/v5/money/life-insurance")
    }
})

  // LIFE INSURANCE

  router.post('/lifeinsurance-answer-v5', function(request, response) {

    var lifeinsurance = request.session.data['lifeinsurance']
    if (lifeinsurance == "yes"){
        response.redirect("/v5/money/exact-amount-insurance")
    } else {
        response.redirect("/v5/money/funeral-plan")
    }
})

  // FUNERAL PLAN

  router.post('/funeralplan-answer-v5', function(request, response) {

    var funeralplan = request.session.data['funeralplan']
    if (funeralplan == "yes"){
        response.redirect("/v5/money/funeral-plan-cover-costs")
    } else {
        response.redirect("/v5/money/burial-club")
    }
})

  // FUNERAL PLAN COVER ANY OF THE FUNERAL COSTS

  router.post('/funeralplancover-answer-v5', function(request, response) {

    var funeralplancover = request.session.data['funeralplancover']
    if (funeralplancover == "no"){
        response.redirect("/v5/money/funeral-plan-refund")
    } else {
        response.redirect("/v5/money/120-limit")
    }
})

  // FUNERAL PLAN REFUND

  router.post('/funeralplanrefund-answer-v5', function(request, response) {

    var funeralplanrefund = request.session.data['funeralplanrefund']
    if (funeralplanrefund == "yes"){
        response.redirect("/v5/money/exact-amount-funeral-refund")
    } else {
        response.redirect("/v5/money/burial-club")
    }
})

  // BURIAL CLUB

  router.post('/burialclub-answer-v5', function(request, response) {

    var burialclub = request.session.data['burialclub']
    if (burialclub == "yes"){
        response.redirect("/v5/money/exact-amount-burial-club")
    } else {
        response.redirect("/v5/money/armed-forces")
    }
})

  // AMRED FORCES

  router.post('/armedforces-answer-v5', function(request, response) {

    var armedforces = request.session.data['armedforces']
    if (armedforces == "yes"){
        response.redirect("/v5/money/war-pension")
    } else {
        response.redirect("/v5/money/other-money")
    }
})

  // WAR PENSION

  router.post('/warpension-answer-v5', function(request, response) {

    var warpension = request.session.data['warpension']
    if (warpension == "yes"){
        response.redirect("/v5/money/exact-amount-war-pension")
    } else {
        response.redirect("/v5/money/other-money")
    }
})

  // OTHER MONEY

  router.post('/othermoney-answer-v5', function(request, response) {

    var othermoney = request.session.data['othermoney']
    if (othermoney == "yes"){
        response.redirect("/v5/money/exact-amount-other-money")
    } else {
        response.redirect("/v5/money/death-certificates")
    }
})

  // FUNERAL DIRECTOR

  router.post('/director-answer-v5', function(request, response) {

    var director = request.session.data['director']
    if (director == "yes"){
        response.redirect("/v5/funeral/provider-name")
    } else {
        response.redirect("/v5/funeral/someone-else")
    }
})

  // SOMEONE ELSE ARRANGING 

  router.post('/someoneelse-answer-v5', function(request, response) {

    var someoneelse = request.session.data['someoneelse']
    if (someoneelse == "yes"){
        response.redirect("/v5/funeral/provider-name")
    } else {
        response.redirect("/v5/funeral/claim-travel")
    }
})

  // DO YOU HAVE A FUNERAL BILL OR SIGNED CONTRACT YET

  router.post('/funeralbill-answer-v5', function(request, response) {

    var funeralbill = request.session.data['funeralbill']
    if (funeralbill == "yes"){
        response.redirect("/v5/funeral/bill-in-your-name")
    } else {
        response.redirect("/v5/funeral/will-bill-be-in-your-name")
    }
})

 // BILL IN YOUR NAME 

router.post('/billinyourname-answer-v5', function(request, response) {

    var billinyourname = request.session.data['billinyourname']
    if (billinyourname == "no"){
        response.redirect("/v5/funeral/arranged-on-your-behalf")    
    } else {
        response.redirect("/v5/funeral/money-paid-off-bill")
    }
  })

     // PAID MONEY OFF BILL

router.post('/moneyoffbill-answer-v5', function(request, response) {

    var moneyoffbill = request.session.data['moneyoffbill']
    if (moneyoffbill == "yes"){
        response.redirect("/v5/funeral/exact-amount-money-off-bill")
    } else {
        response.redirect("/v5/funeral/items-not-on-bill")
    }
})

   // USED MONEY FROM DECEASED TO PAY FUNERAL

router.post('/usedmoney-answer-v5', function(request, response) {

    var usedmoney = request.session.data['usedmoney']
    if (usedmoney == "yes"){
        response.redirect("/v5/funeral/exact-amount-used-money")
    } else {
        response.redirect("/v5/funeral/items-not-on-bill")
    }
})

   // CLAIM TRAVEL ANSWER

   router.post('/claimtravel-answer-v5', function(request, response) {

    var claimtravel = request.session.data['claimtravel']
    if (claimtravel == "yes"){
        response.redirect("/v5/funeral/travel-expenses")
    } else {
        response.redirect("/v5/funeral/check-answers-funeral")
    }
})

   // DOCUMENTS ANSWER

router.post('/documents-answer-v5', function(request, response) {

    var documents = request.session.data['documents']
    if (documents.includes("bill")){
        response.redirect("/v5/funeral/bill-in-your-name")
    } else if (documents == "contract"){
        response.redirect("/v5/funeral/bill-in-your-name")
    } else if (documents == "estimate"){
        response.redirect("/v5/funeral/will-bill-be-in-your-name")
    } else {
        response.redirect("/v5/funeral/will-bill-be-in-your-name")
    }
})

   // ARRANGED ON YOUR BEHALF (WHEN CITIZEN HAS BILL OR SIGNED CONTRACT)

   router.post('/arrangementsonyourbehalf-answer-v5', function(request, response) {

    var arrangementsonyourbehalf = request.session.data['arrangementsonyourbehalf']
    if (arrangementsonyourbehalf == "yes"){
        response.redirect("/v5/funeral/money-paid-off-bill")
    } else {
        response.redirect("/v5/funeral/no-permission")
    }
})

   // NO PERMISSION GIVEN (WHEN CITIZEN HAS BILL OR SIGNED CONTRACT)

   router.post('/permission-answer-v5', function(request, response) {

    var nopermission = request.session.data['nopermission']
    if (nopermission == "yes"){
        response.redirect("/v5/funeral/money-paid-off-bill")
    } else {
        response.redirect("/index")
    }
})

   // NO PERMISSION GIVEN (ESTIMATE OR NO DOCUMENTS)

   router.post('/permission-other-answer-v5', function(request, response) {

    var nopermissionother = request.session.data['nopermissionother']
    if (nopermissionother == "yes"){
        response.redirect("/v5/funeral/claim-travel")
    } else {
        response.redirect("/index")
    }
})

 // WILL BILL BE IN YOUR NAME 

 router.post('/willbillbeinyourname-answer-v5', function(request, response) {

    var willbillbeinyourname = request.session.data['willbillbeinyourname']
    if (willbillbeinyourname == "no"){
        response.redirect("/v5/funeral/allowing-on-your-behalf")    
    } else {
        response.redirect("/v5/funeral/claim-travel")
    }
  })

   // ARE YOU ALLOWING SOMEONE ON YOUR BEHALF (ESTIMATE OR NO DOCUMENTS)

 router.post('/allowingonyourbehalf-answer-v5', function(request, response) {

    var allowingonyourbehalf = request.session.data['allowingonyourbehalf']
    if (allowingonyourbehalf == "yes"){
        response.redirect("/v5/funeral/claim-travel")    
    } else {
        response.redirect("/v5/funeral/no-permission")
    }
  })

  router.post('/transporttype-answer-v5', function(request, response) {

    var transporttype = request.session.data['transporttype']
    if (transporttype.includes("car")){
        response.redirect("/v5/funeral/check-answers-funeral")
    } else {
        response.redirect("/v5/funeral/how-much-paid")
    }
})

}