//Global variables
var bookingList = [
    { name: "Athan", id: "100001", pickup: "Crossbie RD", drop:"Elizabeth Ave" },
    { name: "Bernie", id: "100002", pickup: "Fresh Water RD", drop:"Suvla Strt" },
    { name: "Alphin", id: "100003", pickup: "Water Street", drop:"Esconi Place" },
    { name: "Benisha", id: "100004", pickup: "Terra Nova RD", drop:"Smallwood Dr" },
  ];
  

var summaryList = [
  // { container:"", image:"/assets/css/images/booking.png", title:"Booking Details", imagename:"Booking icon",
  //  textline1:"BOOKING ID: 400001", textline2:"DATE: 5TH JUNE 2023", textline3:"TIME: 10:00AM", textline4:"" },
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