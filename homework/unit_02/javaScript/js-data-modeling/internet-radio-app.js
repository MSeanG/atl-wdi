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

var exampleStation = {
    id: '123GH4GV56B7MNU8I9L0987N6',
    name: 'WSB 95.5',
    genre: {
        music_genre: ['Talk Radio']
    },
    popularity: {
        numberOfListeners: 1234567
    },
    playLists: {
        playList: ['Re-runs']
    }
}