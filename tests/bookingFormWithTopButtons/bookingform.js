function showStep(stepNumber) {
    const formSteps = $('.form-step');
     const stepTabs = $('.step-tab');

       stepTabs.removeClass('active');
     formSteps.removeClass('active');
     
          stepTabs.eq(stepNumber - 1).addClass('active');
     
        formSteps.eq(stepNumber - 1).addClass('active');
   }

   //tick icon show
   $(".bi-check").hide();
   $(".step1input").on("click", function() {
    $(".step1icon").show();
   })
