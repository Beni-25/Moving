var testLoops =[
    {Name:"NAME: BENI"},
    {Name:"NAME: BERNIE"},
    {Name:"NAME: BENISHA"},

];

// Local Storage
localStorage.setItem("heading", "AB Movers");
$("#heading").text(localStorage.getItem("heading"));


window.Fruits="Fruits"//key to set in local storage


function saveFruits(){
  let existingFruits = JSON.parse(localStorage.getItem(window.Fruits)) || [];//if existing fruits available, using parse to get the fruits else empty array set
  const newFruit = document.getElementById("fruitname").value;//get the new fruit name
  if (newFruit) {// if new fruit is there
    existingFruits.push(newFruit);//push new fruit to the earlier Fruits array
    localStorage.setItem(window.Fruits, JSON.stringify(existingFruits));// set the new fruit added array to local storage
    document.getElementById("fruitname").value = "";//clear input field

      }
}

 
function renderCards() {
for(let i=0;i<testLoops.length;i++){
  let loops = testLoops[i];
  console.log(testLoops.length);

$(".cardsrepetition").append(`<div class="card mb-3 container-contact lpcard" style="max-width: 540px;">
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

function renderWhileCards() {
  let i=0;
  while(i<testLoops.length){
    let loops = testLoops[i];
    console.log(testLoops.length);
  
  $(".cardsrepetition").append(`<div class="card mb-3 container-contact lpcard" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/assets/css/images/profileuser.png" class="img-fluid rounded-start" alt="User icon">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Contact Details Using While</h5>
        <p class="card-text">${loops["Name"]}</p>
        <p class="card-text">PHONE NUMBER: +1 709 351 6971</p>
        <p class="card-text">EMAIL ADDRESS: benisha@gmail.com</p>
      </div>
    </div>
  </div>
  </div>`);
  i++;
  }
  }

$(document).ready(function () {
    renderCards();
    renderWhileCards();
});


