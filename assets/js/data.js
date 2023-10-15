//Global variables
var bookingList = [
    { name: "Athan", id: "100001", pickup: "Crossbie RD", drop:"Elizabeth Ave" },
    { name: "Bernie", id: "100002", pickup: "Fresh Water RD", drop:"Suvla Strt" },
    { name: "Alphin", id: "100003", pickup: "Water Street", drop:"Esconi Place" },
    { name: "Benisha", id: "100004", pickup: "Terra Nova RD", drop:"Smallwood Dr" },
  ];
  

var summaryList = [
  { container:"container-booking", image:"/assets/css/images/booking.png", title:"Booking Details", imagename:"Booking icon",
   textline1:"BOOKING ID" + selectedBooking["id"], textline2:"DATE:", textline3:"TIME: "},
  { container:"container-location", image:"/assets/css/images/location.png", title:"Location Details", imagename:"Location icon",
   textline1:"<strong>PICKUP LOCATION:</strong>" + selectedBooking["address"], 
   textline2:"<strong>DROP LOCATION:</strong>", textline3:"LOAD SIZE:"},
  { container:"container-estimation", image:"/assets/css/images/estimation.png", title:"Estimation Details", imagename:"Estimation icon", 
  textline1:"TOTAL DISTANCE IN KILOMETERS:" + selectedBooking["distance"], textline2:"TOTAL ESTIMATED TIME IN MINS:", 
  textline3:"ESTIMATED PRIZE :"},
  { container:"container-details", image:"/assets/css/images/info.png", title:"Additional Details", imagename:"Additional Info icon", 
  textline1:"ARE THERE ANY PARKING CHALLENGES? " + selectedBooking["parking"], textline2:"DO YOU HAVE ANY STAIRS/STEPS IN THE LOCATION?", 
  textline3:"INSTRUCTIONS:"},

];


var carouselList=[
{imageclass:"active carousel-image1-wrapper"},
{imageclass:"carousel-image2-wrapper"},
{imageclass:"carousel-image3-wrapper"},
{imageclass:"carousel-image4-wrapper"},

];

var cardList=[
{image:"img1.jpeg", imagename:"Furniture moving image", title:"Reliable", cardtext:"From studio apartments all the way up to multi " + 
"bedroom homes, you can trust us with your prized possessions with safe packing and unpacking."},
{image:"img2.jpeg", imagename:"Mattress moving image", title:"Loading/Unloading", cardtext:"Choose full-residential moving or small " + 
"furniture moving options. Our highly trained crews ensure your belongings arrive safe and sound."},
{image:"img3.jpeg", imagename:"Couch moving image", title:"Professional", cardtext:" We offer a professionally trained and background " + 
"checked moving team to ensure your belongings are handled with care."},
{image:"img4.jpeg", imagename:"Mattress moving in Truck image", title:"Furniture Moving", cardtext:"Our professional furniture movers " + 
"and furniture delivery services will transport your items safely and economically."},

];