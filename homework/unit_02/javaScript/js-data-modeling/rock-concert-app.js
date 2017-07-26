// Rock Concert App
//
// Band
// --Tour
// ----Concert Date
// ----Tickets
// --Next Recommended Show

/* OBJECTS */
var band = {
    id: Number,
    name: String,
    members: [],
    genre: []
}
var tour = {
    id: Number,
    name: String,
    band: [],
    dates: [],
    ticketPrices: [{
        location: String,
        price: String,
        date: String,
    }]
}
var nextShow = {
    id: Number,
    band: [],
    tour: String,
    date: Number,
    location: String,
    ticketPrice: Number,
    orderTickets: {
        date: Number,
        location: String,
        price: Number,
    }
}