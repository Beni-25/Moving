

//Global variables
var bookingList = [
    { id: "Benisha-01", contact:"+1 7095557777", pickup: "Crossbie RD", drop:"Elizabeth Ave" },
    { id: "Anoj-02", contact:"+1 7096667878", pickup: "Fresh Water RD", drop:"Suvla Strt" },
    { id: "Alphin-03",contact:"+1 7091238878", pickup: "Water Street", drop:"Esconi Place" },
    { id: "Bernie-04", contact:"+1 7095647870",pickup: "Terra Nova RD", drop:"Smallwood Dr" },
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


let selectedBooking = getSelectedBooking();
console.log("selectedBooking", selectedBooking);
var summaryList = [
  { container:"container-booking", image:"/assets/css/images/booking.png", title:"Booking Details", imagename:"Booking icon",
   textline1:"BOOKING ID: "+ selectedBooking["id"], textline2:"DATE: "+ selectedBooking["date"], textline3:"TIME: "+ selectedBooking["time"]},
  { container:"container-location", image:"/assets/css/images/location.png", title:"Location Details", imagename:"Location icon",
   textline1:"<strong>PICKUP LOCATION: </strong>"+ selectedBooking["P_address1"]  + selectedBooking["P_address2"] + "," +
   selectedBooking["P_city"] + "," + selectedBooking["P_province"]+","+ selectedBooking["P_zipcode"],
   textline2:"<strong>DROP LOCATION: </strong>"+ selectedBooking["D_address1"] + selectedBooking["D_address2"] + "," +
   selectedBooking["D_city"] + "," + selectedBooking["D_province"]+","+ selectedBooking["D_zipcode"],
   textline3:"LOAD SIZE: " + selectedBooking["load"]},
  { container:"container-estimation", image:"/assets/css/images/estimation.png", title:"Estimation Details", imagename:"Estimation icon", 
  textline1:"TOTAL DISTANCE IN KILOMETERS: "+ selectedBooking["distance"], textline2:"TOTAL ESTIMATED TIME IN MINS: ", 
  textline3:"ESTIMATED PRIZE: "},
  { container:"container-details", image:"/assets/css/images/info.png", title:"Additional Details", imagename:"Additional Info icon", 
  textline1:"ARE THERE ANY PARKING CHALLENGES? "+ selectedBooking["parking"], textline2:"DO YOU HAVE ANY STAIRS/STEPS IN THE LOCATION? "+ selectedBooking["stairs"], 
  textline3:"INSTRUCTIONS: "+ selectedBooking["instructions"]},

];

