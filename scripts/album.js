//Example Album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26'},
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21'},
        { title: 'Magenta', duration: '2:15'}
    ]
};

//Another Example Album
var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

//My Album Object
var albumGaga = {
    title: 'ArtPOP',
    artist: 'Lady Gaga',
    label: 'Insomniac/Interscope Records',
    year: '2013',
    albumArtUrl: 'assets/images/album_covers/artpop_cover.png',
    songs: [
        { title: 'Aura', duration: '3:55' },
        { title: 'Venus', duration: '3:53' },
        { title: 'G.U.Y.', duration: '3:52'},
        { title: 'MANiCURE', duration: '3:19' },
        { title: 'Donatella', duration: '4:24'}
    ]
}

var createSongRow = function(songNumber, songName, songLength){
    var template = 
        '<tr class = "album-view-song-item">'
    + '     <td class = "song-item-number">' + songNumber + '</td>'
    + '     <td class = "song-item-title>' + songName + '</td>'
    + '     <td class = "song-item-duration">' + songLength + '</td>'
    + '</tr>'
    ;
    
    return template;
    
};

// #1
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art').addEventListener ('click', function(){ setCurrentAlbum();})[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum= function(album) {
    // #2
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChilde.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodevalue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    // #3
    albumSongList.innerHTML = ' ';
    
    // #4
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

window.onload = function () {
        setCurrentAlbum(albumPicasso);
        
        var albums = [albumPicasso, albumMarconi, albumGaga];
        var index = 1;
        albumImage.addEventListener("click", function(event){
            setCurrentAlbum(album[index]);
            index++;
            if (index == albums.length){
                index = 0;
            }
        });
};