function showStep(stepNumber) {
    const formSteps = $('.form-step');
     const stepTabs = $('.step-tab');

       stepTabs.removeClass('active');
     formSteps.removeClass('active');
     
          stepTabs.eq(stepNumber - 1).addClass('active');
     
        formSteps.eq(stepNumber - 1).addClass('active');
   }

   //tick icon hide
   $(function (){
    $(".bi-check").hide();
   })
   