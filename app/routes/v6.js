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

// RESPONSIBLE FOR PAYING

router.post('/responsible-answer-v6', function(request, response) {

  var responsible = request.session.data['responsibleforpaying']
  if (responsible == "yes"){
      response.redirect("/v6/eligibility/where-you-live")
  } else {
      response.redirect("/v6/eligibility/not-responsible")
  }
})

// WHERE YOU LIVE

router.post('/whereyoulive-answer-v6', function(request, response) {

  var country = request.session.data['whereyoulive']
  if (country == "abroad"){
    response.redirect("/v6/eligibility/live-outside-uk")
  } else if (country == "northern-ireland"){
        response.redirect("/v6/eligibility/live-in-ni")
  } else if (country == "scotland"){
        response.redirect("/v6/eligibility/live-in-scotland")
  } else {
      response.redirect("/v6/eligibility/benefits")
  }
})

  // BENEFITS ANSWER

  router.post('/benefits-answer-v6', function(request, response) {

    var benefits = request.session.data['benefits']
    if (benefits == "no"){
        response.redirect("/v6/eligibility/not-on-qb")
    } else {
        response.redirect("/v6/eligibility/usually-live-in-uk")
    }
})

  // DID THE DECEASED LIKE IN THE UK

  router.post('/deceaseduk-answer-v6', function(request, response) {

    var deceaseduk = request.session.data['deceaseduk']
    if (deceaseduk == "no"){
        response.redirect("/v6/eligibility/deceased-outside-uk")
    } else {
        response.redirect("/v6/eligibility/funeral-taken-place")
    }
})

  // FUNERAL IN UK

  router.post('/funeralinuk-answer-v6', function(request, response) {

    var funeralinuk = request.session.data['funeralinuk']
    if (funeralinuk == "no"){
        response.redirect("/v6/eligibility/funeral-in-eea")
    } else {
        response.redirect("/v6/eligibility/check-answers-eligibility")
    }
})

  // FUNERAL IN EEA

  router.post('/funeraleea-answer-v6', function(request, response) {

    var funeraleea = request.session.data['funeraleea']
    if (funeraleea == "no"){
        response.redirect("/v6/eligibility/funeral-outside-uk")
    } else {
        response.redirect("/v6/eligibility/check-answers-eligibility")
    }
})

  // FINANCIAL AFFAIRS

  router.post('/financial-affairs-answer-v6', function(request, response) {

    var financialaffairs = request.session.data['financialaffairs']
    if (financialaffairs == "you"){
        response.redirect("/v6/money/bank-accounts")
    } else {
        response.redirect("/v6/money/responsible-for-finances-name")
    }
})

  // MONEY IN BANK ACCOUNTS

  router.post('/bankaccounts-answer-v6', function(request, response) {

    var bankaccounts = request.session.data['bankaccounts']
    if (bankaccounts == "yes"){
        response.redirect("/v6/money/exact-amount-bank-account")
    } else {
        response.redirect("/v6/money/isa")
    }
})

  // MONEY IN JOINT ACCOUNT

  router.post('/jointaccount-answer-v6', function(request, response) {

    var jointaccount = request.session.data['jointaccount']
    if (jointaccount == "yes"){
        response.redirect("/v6/money/exact-amount-joint-account")
    } else if (jointaccount == "all"){
        response.redirect("/v6/money/partner-joint-account")    
    } else {
        response.redirect("/v6/money/isa")
    }
})

  // IS PARTNER OTHER JOINT ACCOUNT HOLDER

  router.post('/partnerjointaccount-answer-v6', function(request, response) {

    var partnerjointaccount = request.session.data['partnerjointaccount']
    if (partnerjointaccount == "no"){
        response.redirect("/v6/money/joint-account-transfer")
    } else {
        response.redirect("/v6/money/isa")
    }
})

  // MONEY TRANSFERRED TO OTHER JOINT ACCOUNT HOLDER

  router.post('/jointaccounttransfer-answer-v6', function(request, response) {

    var jointaccounttransfer = request.session.data['jointaccounttransfer']
    if (jointaccounttransfer == "yes"){
        response.redirect("/v6/money/exact-amount-other-joint-account")
    } else {
        response.redirect("/v6/money/isa")
    }
})

  // MONEY IN ISAS

  router.post('/isas-answer-v6', function(request, response) {

    var isas = request.session.data['isas']
    if (isas == "yes"){
        response.redirect("/v6/money/exact-amount-isa")
    } else {
        response.redirect("/v6/money/in-cash")
    }
})

  // MONEY IN CASH

  router.post('/cash-answer-v6', function(request, response) {

    var cash = request.session.data['cash']
    if (cash == "yes"){
        response.redirect("/v6/money/exact-amount-cash")
    } else {
        response.redirect("/v6/money/plans-filter")
    }
})

  // PLANS FILTER QUESTION

  router.post('/plansfilter-answer-v6', function(request, response) {

    var plansfilter = request.session.data['plansfilter']
    if (plansfilter == "no"){
        response.redirect("/v6/money/burial-club")
    } else {
        response.redirect("/v6/money/workplace-pension")
    }
})

  // WORKPLACE PENSION

  router.post('/pension-answer-v6', function(request, response) {

    var pension = request.session.data['pension']
    if (pension == "yes"){
        response.redirect("/v6/money/exact-amount-pension")
    } else {
        response.redirect("/v6/money/life-insurance")
    }
})

  // LIFE INSURANCE

  router.post('/lifeinsurance-answer-v6', function(request, response) {

    var lifeinsurance = request.session.data['lifeinsurance']
    if (lifeinsurance == "yes"){
        response.redirect("/v6/money/exact-amount-insurance")
    } else {
        response.redirect("/v6/money/funeral-plan")
    }
})

  // FUNERAL PLAN

  router.post('/funeralplan-answer-v6', function(request, response) {

    var funeralplan = request.session.data['funeralplan']
    if (funeralplan == "yes"){
        response.redirect("/v6/money/funeral-plan-cover-costs")
    } else {
        response.redirect("/v6/money/armed-forces")
    }
})

  // FUNERAL PLAN COVER ANY OF THE FUNERAL COSTS

  router.post('/funeralplancover-answer-v6', function(request, response) {

    var funeralplancover = request.session.data['funeralplancover']
    if (funeralplancover == "no"){
        response.redirect("/v6/money/funeral-plan-refund")
    } else {
        response.redirect("/v6/money/120-limit")
    }
})

  // FUNERAL PLAN REFUND

  router.post('/funeralplanrefund-answer-v6', function(request, response) {

    var funeralplanrefund = request.session.data['funeralplanrefund']
    if (funeralplanrefund == "yes"){
        response.redirect("/v6/money/exact-amount-funeral-refund")
    } else {
        response.redirect("/v6/money/armed-forces")
    }
})

  // BURIAL CLUB

  router.post('/burialclub-answer-v6', function(request, response) {

    var burialclub = request.session.data['burialclub']
    if (burialclub == "yes"){
        response.redirect("/v6/money/exact-amount-burial-club")
    } else {
        response.redirect("/v6/money/other-money")
    }
})

  // AMRED FORCES

  router.post('/armedforces-answer-v6', function(request, response) {

    var armedforces = request.session.data['armedforces']
    if (armedforces == "yes"){
        response.redirect("/v6/money/war-pension")
    } else {
        response.redirect("/v6/money/burial-club")
    }
})

  // WAR PENSION

  router.post('/warpension-answer-v6', function(request, response) {

    var warpension = request.session.data['warpension']
    if (warpension == "yes"){
        response.redirect("/v6/money/exact-amount-war-pension")
    } else {
        response.redirect("/v6/money/burial-club")
    }
})

  // OTHER MONEY

  router.post('/othermoney-answer-v6', function(request, response) {

    var othermoney = request.session.data['othermoney']
    if (othermoney == "yes"){
        response.redirect("/v6/money/exact-amount-other-money")
    } else {
        response.redirect("/v6/money/death-certificates")
    }
})

  // PERMISSION TO COLLECT

  router.post('/permission-to-collect-v6', function(request, response) {

    var permission = request.session.data['permission']
    if (permission == "yes"){
        response.redirect("/v6/money/check-answers-money")
    } else {
        response.redirect("/v6/money/permission-to-collect-in-future")
    }
})

  // FUNERAL DIRECTOR

  router.post('/director-answer-v6', function(request, response) {

    var director = request.session.data['director']
    if (director == "yes"){
        response.redirect("/v6/funeral/provider-name")
    } else {
        response.redirect("/v6/funeral/someone-else")
    }
})

  // SOMEONE ELSE ARRANGING 

  router.post('/someoneelse-answer-v6', function(request, response) {

    var someoneelse = request.session.data['someoneelse']
    if (someoneelse == "yes"){
        response.redirect("/v6/funeral/provider-name")
    } else {
        response.redirect("/v6/funeral/have-you-used-money-from-deceased")
    }
})

   // HAVE YOU USED MONEY FROM DECEASED TO PAY FUNERAL (asked if arranging yourself)

   router.post('/haveyouusedmoney-answer-v6', function(request, response) {

    var haveyouusedmoney = request.session.data['haveyouusedmoney']
    if (haveyouusedmoney == "yes"){
        response.redirect("/v6/funeral/exact-amount-money-used")
    } else {
        response.redirect("/v6/funeral/claim-travel")
    }
})

  // DO YOU HAVE A FUNERAL BILL OR SIGNED CONTRACT YET

  router.post('/funeralbill-answer-v6', function(request, response) {

    var funeralbill = request.session.data['funeralbill']
    if (funeralbill == "yes"){
        response.redirect("/v6/funeral/bill-in-your-name")
    } else {
        response.redirect("/v6/funeral/will-bill-be-in-your-name")
    }
})

 // BILL IN YOUR NAME 

router.post('/billinyourname-answer-v6', function(request, response) {

    var billinyourname = request.session.data['billinyourname']
    if (billinyourname == "no"){
        response.redirect("/v6/funeral/arranged-on-your-behalf")    
    } else {
        response.redirect("/v6/funeral/money-paid-off-bill")
    }
  })

     // PAID MONEY OFF BILL

router.post('/moneyoffbill-answer-v6', function(request, response) {

    var moneyoffbill = request.session.data['moneyoffbill']
    if (moneyoffbill == "yes"){
        response.redirect("/v6/funeral/exact-amount-money-off-bill")
    } else {
        response.redirect("/v6/funeral/items-not-on-bill")
    }
})

   // USED MONEY FROM DECEASED TO PAY FUNERAL

router.post('/usedmoney-answer-v6', function(request, response) {

    var usedmoney = request.session.data['usedmoney']
    if (usedmoney == "yes"){
        response.redirect("/v6/funeral/exact-amount-used-money")
    } else {
        response.redirect("/v6/funeral/items-not-on-bill")
    }
})

   // CLAIM TRAVEL ANSWER

   router.post('/claimtravel-answer-v6', function(request, response) {

    var claimtravel = request.session.data['claimtravel']
    if (claimtravel == "yes"){
        response.redirect("/v6/funeral/travel-expenses")
    } else {
        response.redirect("/v6/funeral/check-answers-funeral")
    }
})

   // DOCUMENTS ANSWER

router.post('/documents-answer-v6', function(request, response) {

    var documents = request.session.data['documents']
    if (documents.includes("bill")){
        response.redirect("/v6/funeral/bill-in-your-name")
    } else if (documents == "contract"){
        response.redirect("/v6/funeral/bill-in-your-name")
    } else if (documents == "estimate"){
        response.redirect("/v6/funeral/will-bill-be-in-your-name")
    } else {
        response.redirect("/v6/funeral/will-bill-be-in-your-name")
    }
})

   // ARRANGED ON YOUR BEHALF (WHEN CITIZEN HAS BILL OR SIGNED CONTRACT)

   router.post('/arrangementsonyourbehalf-answer-v6', function(request, response) {

    var arrangementsonyourbehalf = request.session.data['arrangementsonyourbehalf']
    if (arrangementsonyourbehalf == "yes"){
        response.redirect("/v6/funeral/money-paid-off-bill")
    } else {
        response.redirect("/v6/funeral/no-permission")
    }
})

   // NO PERMISSION GIVEN (WHEN CITIZEN HAS BILL OR SIGNED CONTRACT)

   router.post('/permission-answer-v6', function(request, response) {

    var nopermission = request.session.data['nopermission']
    if (nopermission == "yes"){
        response.redirect("/v6/funeral/money-paid-off-bill")
    } else {
        response.redirect("/index")
    }
})

   // NO PERMISSION GIVEN (ESTIMATE OR NO DOCUMENTS)

   router.post('/permission-other-answer-v6', function(request, response) {

    var nopermissionother = request.session.data['nopermissionother']
    if (nopermissionother == "yes"){
        response.redirect("/v6/funeral/claim-travel-in-future")
    } else {
        response.redirect("/index")
    }
})

 // WILL BILL BE IN YOUR NAME 

 router.post('/willbillbeinyourname-answer-v6', function(request, response) {

    var willbillbeinyourname = request.session.data['willbillbeinyourname']
    if (willbillbeinyourname == "no"){
        response.redirect("/v6/funeral/allowing-on-your-behalf")    
    } else {
        response.redirect("/v6/funeral/claim-travel-in-future")
    }
  })

   // ARE YOU ALLOWING SOMEONE ON YOUR BEHALF (ESTIMATE OR NO DOCUMENTS)

 router.post('/allowingonyourbehalf-answer-v6', function(request, response) {

    var allowingonyourbehalf = request.session.data['allowingonyourbehalf']
    if (allowingonyourbehalf == "yes"){
        response.redirect("/v6/funeral/claim-travel-in-future")    
    } else {
        response.redirect("/v6/funeral/no-permission")
    }
  })

// WHAT TYPE OF TRAVEL ROUTES

  router.post('/transporttype-answer-v6', function(request, response) {

    var transporttype = request.session.data['transporttype']
    if (transporttype.includes("car")){
        response.redirect("/v6/funeral/check-answers-funeral")
    } else {
        response.redirect("/v6/funeral/how-much-paid")
    }
})

// ROUTES WITH NEW IFM/CR JOURNEY BELOW

// PERSON WHO DIED OVER 20 

router.post('/over-20-answer', function(request, response) {

    var over20 = request.session.data['over20']
    if (over20.includes("yes")){
        response.redirect("/v6/eligibility/partner")
    } else {
        response.redirect("/v6/eligibility/under16")
    }
})

// PERSON WHO DIED UNDER 16 OR IN FULL TIME EDUCATION

router.post('/16to19-answer', function(request, response) {

    var under16 = request.session.data['under16']
    if (under16.includes("no")){
        response.redirect("/v6/eligibility/partner")
    } else {
        response.redirect("/v6/eligibility/cannot-use-private-beta")
    }
})

// ARE YOU THE PARTNER

router.post('/partner-answer-v6', function(request, response) {

    var relationship = request.session.data['partner']
    if (relationship == "yes"){
        response.redirect("/v6/eligibility/same-address")
    } else {
        response.redirect("/v6/eligibility/do-you-have-partner")
    }
  })

  // WERE YOU LIVING TOGETHER

router.post('/same-address-answer-v6', function(request, response) {

    var address = request.session.data['sameaddress']
    if (address == "no"){
        response.redirect("/v6/eligibility/cr-other-ifms")
    } else {
        response.redirect("/v6/eligibility/responsible-for-paying")
    }
  })

    // ASKING CR IF THEIR ARE OTHER IFMS

    router.post('/cr-other-ifms-answer', function(request, response) {

        var ifm = request.session.data['ifm']
        if (ifm.includes("none")){
            response.redirect("/v6/eligibility/responsible-for-paying")
        } else {
            response.redirect("/v6/eligibility/ifm-should-apply")
        }
    })

    // IFM SOFT STOP

        router.post('/ifm-soft-stop-answer', function(request, response) {

            var ifmsoftstop = request.session.data['ifmsoftstop']
            if (ifmsoftstop.includes("yes")){
                response.redirect("/v6/eligibility/responsible-for-paying")
            } else {
                response.redirect("/index")
            }
        })

        // ARE YOU THE PARTNER

        router.post('/deceasedhavepartner-answer', function(request, response) {

            var deceasedhavepartner = request.session.data['deceasedhavepartner']
            if (deceasedhavepartner == "yes"){
                response.redirect("/v6/eligibility/partner-should-apply")
            } else {
                response.redirect("/v6/eligibility/relationship-to-deceased")
            }
          })

        // PARTNER SOFT STOP

        router.post('/partner-soft-stop-answer', function(request, response) {

            var partnersoftstop = request.session.data['partnersoftstop']
            if (partnersoftstop.includes("yes")){
                response.redirect("/v6/eligibility/relationship-to-deceased")
            } else {
                response.redirect("/index")
            }
        })

        // RELATIONSHIP TO DECEASED (to go on to ask about other IFMS)

        router.post('/relationship-to-deceased-answer', function(request, response) {

            var relationshiptodeceased = request.session.data['relationshiptodeceased']
            if (relationshiptodeceased == "childofdeceased"){
              response.redirect("/v6/eligibility/child-other-ifms")
            } else if (relationshiptodeceased == "parentofdeceased"){
                  response.redirect("/v6/eligibility/parent-other-ifms")
            } else {
                response.redirect("/v6/eligibility/cr-other-ifms")
            }
          })

        // IFM LOOP ROUTING BELOW

        // PARENT ESTRANGEMENT

        router.post('/relationshipbrokendown-answer', function(request, response) {

            var relationshipbrokendown = request.session.data['relationshipbrokendown']
            if (relationshipbrokendown == "yes"){
              response.redirect("/v6/ifm/parent/add-another-parent")
            } else {
                response.redirect("/v6/ifm/parent/their-details")
            }
          })    

          // PARENT ON QB

          router.post('/parent-qb-answer', function(request, response) {

            var parentonqb = request.session.data['parentonqb']
            if (parentonqb == "Yes"){
              response.redirect("/v6/ifm/parent/benefits")
            } else if (parentonqb == "dontknow"){
                  response.redirect("/v6/ifm/parent/add-another-parent")
            } else {
                response.redirect("/v6/ifm/parent/exemption-list")
            }
          })

        // WHAT QB PARENT ON

        router.post('/what-benefits-parent-answer', function(request, response) {

            var whatbenefitsparent = request.session.data['whatbenefitsparent']
            if (whatbenefitsparent == "no"){
              response.redirect("/v6/ifm/parent/soft-stop")
            } else {
                response.redirect("/v6/ifm/parent/add-another-parent")
            }
          })

        // CONTINUING THROUGH PARENT 

        router.post('/addingparentsoftstop-answer', function(request, response) {

            var addingparentsoftstop = request.session.data['addingparentsoftstop']
            if (addingparentsoftstop == "yes"){
              response.redirect("/v6/ifm/parent/add-another-parent")
            } else {
                response.redirect("/index")
            }
          })    

        // PARENT EXEMPTION  LIST ANSWER

        router.post('/parent-exemption-answer', function(request, response) {

            var parentexemption = request.session.data['parentexemption']
            if (parentexemption == "no"){
              response.redirect("/v6/ifm/parent/soft-stop")
            } else {
                response.redirect("/v6/ifm/parent/add-another-parent")
            }
          })  

          
         // ADDING SECOND PARENT

          router.post('/add-2nd-parent-answer', function(request, response) {

            var parenttwo = request.session.data['parenttwo']
            if (parenttwo == "no"){
              response.redirect("/v6/ifm/child/about-a-child")
            } else {
                response.redirect("/v6/ifm/parent2/about-a-parent")
            }
          })  

          // ADDING SECOND PARENT (NO CHILDREN STRAIGHT TO MONEY)

          router.post('/add-2nd-parent-no-child-answer', function(request, response) {

            var parenttwo = request.session.data['parenttwo']
            if (parenttwo == "no"){
              response.redirect("/v6/money/start")
            } else {
                response.redirect("/v6/ifm/parent2/about-a-parent")
            }
          })  

          // PARENT2 ROUTES BELOW 

          // PARENT2 RELATIONSHIP BROKEN DOWN 
          

          router.post('/relationshipbrokendown-answer2', function(request, response) {

            var relationshipbrokendown2 = request.session.data['relationshipbrokendown2']
            if (relationshipbrokendown2 == "yes"){
              response.redirect("/v6/ifm/parent2/add-another-parent")
            } else {
                response.redirect("/v6/ifm/parent2/their-details")
            }
          })    

          // PARENT2 ON QB 

          router.post('/parent-qb-answer2', function(request, response) {

            var parentonqb2 = request.session.data['parentonqb2']
            if (parentonqb2 == "Yes"){
              response.redirect("/v6/ifm/parent2/benefits")
            } else if (parentonqb2 == "dontknow"){
                  response.redirect("/v6/ifm/parent2/add-another-parent")
            } else {
                response.redirect("/v6/ifm/parent2/exemption-list")
            }
          })

          // WHAT QB PARENT2 ON

        router.post('/what-benefits-parent-answer2', function(request, response) {

            var whatbenefitsparent2 = request.session.data['whatbenefitsparent2']
            if (whatbenefitsparent2 == "no"){
              response.redirect("/v6/ifm/parent2/soft-stop")
            } else {
                response.redirect("/v6/ifm/parent2/add-another-parent")
            }
          })

          // CONTINUING THROUGH PARENT2

        router.post('/addingparentsoftstop-answer2', function(request, response) {

            var addingparentsoftstop2 = request.session.data['addingparentsoftstop2']
            if (addingparentsoftstop2 == "yes"){
              response.redirect("/v6/ifm/parent2/add-another-parent")
            } else {
                response.redirect("/index")
            }
          })    

          // PARENT2 EXEMPTION  LIST ANSWER

        router.post('/parent-exemption-answer2', function(request, response) {

            var parentexemption2 = request.session.data['parentexemption2']
            if (parentexemption2 == "no"){
              response.redirect("/v6/ifm/parent2/soft-stop")
            } else {
                response.redirect("/v6/ifm/parent2/add-another-parent")
            }
          })  

        // START OF CHILD LOOP 

        // CHILD ESTRANGEMENT

        router.post('/relationshipbrokendownc1-answer', function(request, response) {

            var relationshipbrokendownc1 = request.session.data['relationshipbrokendownc1']
            if (relationshipbrokendownc1 == "yes"){
              response.redirect("/v6/ifm/child/add-another-child")
            } else {
                response.redirect("/v6/ifm/child/their-details")
            }
          })    

         // CHILD ON QB

         router.post('/child-qb-answer', function(request, response) {

            var childonqb = request.session.data['childonqb']
            if (childonqb == "Yes"){
              response.redirect("/v6/ifm/child/benefits")
            } else if (childonqb == "dontknow"){
                  response.redirect("/v6/ifm/child/add-another-child")
            } else {
                response.redirect("/v6/ifm/child/exemption-list")
            }
          }) 

        // WHAT QB CHILD ON

        router.post('/what-benefits-child-answer', function(request, response) {

            var whatbenefitschild = request.session.data['whatbenefitschild']
            if (whatbenefitschild == "no"){
              response.redirect("/v6/ifm/child/soft-stop")
            } else {
                response.redirect("/v6/ifm/child/add-another-child")
            }
          })

          // CONTINUING THROUGH CHILD

        router.post('/addingchildsoftstop-answer', function(request, response) {

            var addingchildsoftstop = request.session.data['addingchildsoftstop']
            if (addingchildsoftstop == "yes"){
              response.redirect("/v6/ifm/child/add-another-child")
            } else {
                response.redirect("/index")
            }
          })   

        // CHILD EXEMPTION LIST ANSWER

        router.post('/child-exemption-answer', function(request, response) {

            var childexemption = request.session.data['childexemption']
            if (childexemption == "no"){
              response.redirect("/v6/ifm/child/soft-stop")
            } else {
                response.redirect("/v6/ifm/child/add-another-child")
            }
          })  

          // NEXT CHILD LOOP

          // ADDING SECOND CHILD

          router.post('/add-2nd-child-answer', function(request, response) {

            var childtwo = request.session.data['childtwo']
            if (childtwo == "no"){
              response.redirect("/v6/money/start")
            } else {
                response.redirect("/v6/ifm/child2/about-a-child")
            }
          })  

        // CHILD2 ESTRANGEMENT

        router.post('/relationshipbrokendownc2-answer', function(request, response) {

            var relationshipbrokendownc2 = request.session.data['relationshipbrokendownc2']
            if (relationshipbrokendownc2 == "yes"){
              response.redirect("/v6/ifm/child2/add-another-child")
            } else {
                response.redirect("/v6/ifm/child2/their-details")
            }
          })    

          // CHILD2 ON QB

         router.post('/child2-qb-answer', function(request, response) {

            var childonqb2 = request.session.data['childonqb2']
            if (childonqb2 == "Yes"){
              response.redirect("/v6/ifm/child2/benefits")
            } else if (childonqb2 == "dontknow"){
                  response.redirect("/v6/ifm/child2/add-another-child")
            } else {
                response.redirect("/v6/ifm/child2/exemption-list")
            }
          }) 

          // WHAT QB CHILD2 ON

        router.post('/what-benefits-child-answer2', function(request, response) {

            var whatbenefitschild2 = request.session.data['whatbenefitschild2']
            if (whatbenefitschild2 == "no"){
              response.redirect("/v6/ifm/child2/soft-stop")
            } else {
                response.redirect("/v6/ifm/child2/add-another-child")
            }
          })

        // CONTINUING THROUGH CHILD2

        router.post('/addingchildsoftstop-answer2', function(request, response) {

            var addingchildsoftstop2 = request.session.data['addingchildsoftstop2']
            if (addingchildsoftstop2 == "yes"){
              response.redirect("/v6/ifm/child2/add-another-child")
            } else {
                response.redirect("/index")
            }
          })   

          // CHILD2 EXEMPTION LIST ANSWER

        router.post('/child-exemption-answer2', function(request, response) {

            var childexemption2 = request.session.data['childexemption2']
            if (childexemption2 == "no"){
              response.redirect("/v6/ifm/child2/soft-stop")
            } else {
                response.redirect("/v6/ifm/child2/add-another-child")
            }
          })  

          // NEXT CHILD LOOP

          // ADDING THIRD CHILD

          router.post('/add-3rd-child-answer', function(request, response) {

            var childthree = request.session.data['childthree']
            if (childthree == "no"){
              response.redirect("/v6/money/start")
            } else {
                response.redirect("/v6/ifm/child3/about-a-child")
            }
          })  

        // CHILD3 ESTRANGEMENT

        router.post('/relationshipbrokendownc3-answer', function(request, response) {

            var relationshipbrokendownc3 = request.session.data['relationshipbrokendownc3']
            if (relationshipbrokendownc3 == "yes"){
              response.redirect("/v6/ifm/child3/add-another-child")
            } else {
                response.redirect("/v6/ifm/child3/their-details")
            }
          })    

          // CHILD3 ON QB

         router.post('/child3-qb-answer', function(request, response) {

            var childonqb3 = request.session.data['childonqb3']
            if (childonqb3 == "Yes"){
              response.redirect("/v6/ifm/child3/benefits")
            } else if (childonqb3 == "dontknow"){
                  response.redirect("/v6/ifm/child3/add-another-child")
            } else {
                response.redirect("/v6/ifm/child3/exemption-list")
            }
          }) 

          // WHAT QB CHILD3 ON

        router.post('/what-benefits-child-answer3', function(request, response) {

            var whatbenefitschild3 = request.session.data['whatbenefitschild3']
            if (whatbenefitschild3 == "no"){
              response.redirect("/v6/ifm/child3/soft-stop")
            } else {
                response.redirect("/v6/ifm/child3/add-another-child")
            }
          })

        // CONTINUING THROUGH CHILD3

        router.post('/addingchildsoftstop-answer3', function(request, response) {

            var addingchildsoftstop3 = request.session.data['addingchildsoftstop3']
            if (addingchildsoftstop3 == "yes"){
              response.redirect("/v6/ifm/child3/add-another-child")
            } else {
                response.redirect("/index")
            }
          })   

          // CHILD3 EXEMPTION LIST ANSWER

        router.post('/child-exemption-answer3', function(request, response) {

            var childexemption3 = request.session.data['childexemption3']
            if (childexemption3 == "no"){
              response.redirect("/v6/ifm/child3/soft-stop")
            } else {
                response.redirect("/v6/ifm/child3/add-another-child")
            }
          })  

          // NEXT CHILD LOOP

          // ADDING FOURTH CHILD

          router.post('/add-4th-child-answer', function(request, response) {

            var childfour = request.session.data['childfour']
            if (childfour == "no"){
              response.redirect("/v6/money/start")
            } else {
                response.redirect("/v6/ifm/child4/about-a-child")
            }
          })  

        // CHILD4 ESTRANGEMENT

        router.post('/relationshipbrokendownc4-answer', function(request, response) {

            var relationshipbrokendownc4 = request.session.data['relationshipbrokendownc4']
            if (relationshipbrokendownc4 == "yes"){
              response.redirect("/v6/ifm/child4/add-another-child")
            } else {
                response.redirect("/v6/ifm/child4/their-details")
            }
          })    

          // CHILD4 ON QB

         router.post('/child4-qb-answer', function(request, response) {

            var childonqb4 = request.session.data['childonqb4']
            if (childonqb4 == "Yes"){
              response.redirect("/v6/ifm/child4/benefits")
            } else if (childonqb4 == "dontknow"){
                  response.redirect("/v6/ifm/child4/add-another-child")
            } else {
                response.redirect("/v6/ifm/child4/exemption-list")
            }
          }) 

          // WHAT QB CHILD4 ON

        router.post('/what-benefits-child-answer4', function(request, response) {

            var whatbenefitschild4 = request.session.data['whatbenefitschild4']
            if (whatbenefitschild4 == "no"){
              response.redirect("/v6/ifm/child4/soft-stop")
            } else {
                response.redirect("/v6/ifm/child4/add-another-child")
            }
          })

        // CONTINUING THROUGH CHILD4

        router.post('/addingchildsoftstop-answer4', function(request, response) {

            var addingchildsoftstop4 = request.session.data['addingchildsoftstop4']
            if (addingchildsoftstop4 == "yes"){
              response.redirect("/v6/ifm/child4/add-another-child")
            } else {
                response.redirect("/index")
            }
          })   

          // CHILD4 EXEMPTION LIST ANSWER

        router.post('/child-exemption-answer4', function(request, response) {

            var childexemption4 = request.session.data['childexemption4']
            if (childexemption4 == "no"){
              response.redirect("/v6/ifm/child4/soft-stop")
            } else {
                response.redirect("/v6/ifm/child4/add-another-child")
            }
          })  


}