var testLoops =[
    {Name:"NAME: BENI"},
    {Name:"NAME: BENIS"},
    {Name:"NAME: BENISHA"},

];

function renderCards() {
for(let i=0;i<testLoops.length;i++){
  let loops = testLoops[i];
  console.log(testLoops.length);

$(".card").append(`<div class="card mb-3 container-contact lpcard" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="/assets/css/images/profileuser.png" class="img-fluid rounded-start" alt="User icon">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Contact Details</h5>
      <p class="card-text">${loops["Name"]}</p>
      <p class="card-text">PHONE NUMBER: +1 709 351 6971</p>
      <p class="card-text">EMAIL ADDRESS: benisha@gmail.com</p>
    </div>
  </div>
</div>
</div>`);
}
}

$(document).ready(function () {
    renderCards();
});