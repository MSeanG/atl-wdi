// Radio on the Internet app
//
// Station
// -- genre
// -- popularity
// -- playlists

/* OBJECTS */

var station = {
    id: Number,
    name: String,
}
var genre = {
    music_genre: []
}
var popularity = {
    numberOfListeners: 1234567
}
var playLists = {
    playList: []
}

/* RELATIONSHIPS */

var station = {
    id: Number,
    name: String,
    genre: {
        music_genre: []
    },
    popularity: {
        numberOfListeners: 1234567
    },
    playLists: {
        playList: []
    }
}