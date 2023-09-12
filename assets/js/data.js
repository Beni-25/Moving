//Global variables
var bookingList = [
    { name: "Athan", id: "100001", pickup: "Crossbie RD", drop:"Elizabeth Ave" },
    { name: "Bernie", id: "100002", pickup: "Fresh Water RD", drop:"Suvla Strt" },
    { name: "Alphin", id: "100003", pickup: "Water Street", drop:"Esconi Place" },
    { name: "Benisha", id: "100004", pickup: "Terra Nova RD", drop:"Smallwood Dr" },
  ];
  

var summaryList = [
  { container:"container-booking", image:"/assets/css/images/booking.png", title:"Booking Details", imagename:"Booking icon",
   textline1:"BOOKING ID: 400001", textline2:"DATE: 5TH JUNE 2023", textline3:"TIME: 10:00AM", textline4:"" },
  { container:"container-location", image:"/assets/css/images/location.png", title:"Location Details", imagename:"Location icon",
   textline1:"<strong>PICKUP LOCATION:</strong> 55 TERRA NOVA ROAD,ST.JOHN'S-A1B1E7", 
   textline2:"<strong>DROP LOCATION:</strong> 676 WHITEWAY LANE,MOUNT PEARL-A1D5E8", textline3:"", textline4:""},
  { container:"container-estimation", image:"/assets/css/images/estimation.png", title:"Estimation Details", imagename:"Estimation icon", 
  textline1:"TOTAL DISTANCE IN KILOMETERS: 8KMS", textline2:"TOTAL ESTIMATED TIME IN MINS: 40 MINS", 
  textline3:"ESTIMATED PRIZE : 60 CAD", textline4:""},
  { container:"container-details", image:"/assets/css/images/info.png", title:"Additional Details", imagename:"Additional Info icon", 
  textline1:"LOAD SIZE: SMALL", textline2:"ARE THERE ANY PARKING CHALLENGES? NO", 
  textline3:"DO YOU HAVE ANY STAIRS/STEPS IN THE LOCATION? NO", textline4:"INSTRUCTIONS: LEAVE AT THE DOORSTEP" },

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