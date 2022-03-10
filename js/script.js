// Complete Day 1 goals here

let song1 = {
  name: "girl",
  image:
    "https://cdn.glitch.global/df64ec3d-bf9b-4e37-8f69-c0248c91d95f/girl?v=1644458729015",
  artist: "oceanfromtheblue",
  length: "3:40",
  link: "https://www.youtube.com/watch?v=8O720os7tnw",
};

let song2 = {
  name: "Amusement Park",
  image:
    "https://cdn.glitch.global/df64ec3d-bf9b-4e37-8f69-c0248c91d95f/Baekhyun-Amusement-Park.webp?v=1644458929233",
  artist: "Baekhyun",
  length: "4:17",
  link: "https://www.youtube.com/watch?v=5nNIRDfgVmM",
};

let song3 = {
  name: "Rendezvous",
  image:
    "https://cdn.glitch.global/df64ec3d-bf9b-4e37-8f69-c0248c91d95f/997D5A3E5A62BD8308.jpg?v=1644458885269",
  artist: "Sik-K",
  length: "3:06",
  link: "https://www.youtube.com/watch?v=PCNtCo5yTRk",
};

let song4 = {
  name: "B.T.W",
  image:
    "https://cdn.glitch.global/df64ec3d-bf9b-4e37-8f69-c0248c91d95f/hqdefault.jpg?v=1644458832124",
  artist: "Jay B (ft. Jay Park)",
  length: "3:16",
  link: "https://www.youtube.com/watch?v=cUAsTQUU3xk",
};

let songInfo = [song1, song2, song3, song4];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function

  //   songInfo.songNames.forEach(function (name) {
  //     $(".songs").append(`<p>${name}</p>`);
  //   });

  //   songInfo.songImages.forEach(function (image) {
  //     $(".images").append(`<img src=${image}/>`);
  //   });

  //   songInfo.artists.forEach(function (artist) {
  //     $(".artists").append(`<p>${artist}</p>`);
  //   });

  //   songInfo.songLengths.forEach(function (length) {
  //     $(".lengths").append(`<p>${length}</p>`);
  //   });

  //   songInfo.links.forEach(function (url) {
  //     $(".links").append(`<a href = "${url}" target ="_blank"> Link </a>`);
  //   });
  songInfo.forEach(function (song) {
    $(".songs").append(`<p>${song.name}</p>`);
    $(".artists").append(`<p>${song.artist}</p>`);
    $(".lengths").append(`<p>${song.length}</p>`);
    $(".links").append(`<a href = "${song.url}" target ="_blank"> Link </a>`);
    $(".images").append(`<img src=${song.image} >`);
  });
  $("h4").text("Number of Songs in the Playlist: " + songInfo.length);
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  // so the existing songs dont repeat themselves
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  let singleSong = $(".title").val();
  //   songInfo.songNames.push(singleSong);
  let singleImage = $(".image").val();
  //   songInfo.songImages.push(singleImage);

  let singleArtist = $(".artist").val();
  //   songInfo.artists.push(singleArtist);

  let singleLength = $(".minutes").val();
  //   songInfo.songLengths.push(singleLength);

  let singleLink = $(".link").val();
  //   songInfo.links.push(singleLink);
  let newSong = {};

  newSong.name = singleSong;
  newSong.image = singleImage;
  newSong.artist = singleArtist;
  newSong.length = singleLength;
  newSong.link = singleLink;

  songInfo.push(newSong);
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

$(".delete").click(function () {
  let x = songInfo.pop();
  emptySongInfo();
  displaySongInfo();
});

displaySongInfo();
