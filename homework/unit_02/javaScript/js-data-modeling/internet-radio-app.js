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
    id: Number,
    music_genre: []
}
var popularity = {
    id: Number,
    numberOfListeners: Number,
}
var playLists = {
    id: Number,
    playList: []
}

/* RELATIONSHIPS */

var exampleStation = {
    id: '123GH4GV56B7MNU8I9L0987N6',
    name: 'WSB 95.5',
    genre: [{
        id:'123GH4GV56B7MNU8I9L0987N7',
        music_genre: ['Talk Radio']
    }],
    popularity: {
        id: '123GH4GV56B7MNU8I9L0987N8',
        numberOfListeners: 1234567
    },
    playLists: [{
        id: '123GH4GV56B7MNU8I9L0987N9',
        playList: ['Re-runs']
    }]
}