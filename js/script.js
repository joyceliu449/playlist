// Complete Day 1 goals here
/*
girl
https://m.media-amazon.com/images/I/A1k-6m4xbqL._SS500_.jpg
oceanfromtheblue
3:40
https://www.youtube.com/watch?v=8O720os7tnw
-
Amusement Park
https://i0.wp.com/colorcodedlyrics.com/wp-content/uploads/2020/12/Baekhyun-Amusement-Park.jpg?fit=1000%2C1000&ssl=1
Baekhyun
4:17
https://www.youtube.com/watch?v=5nNIRDfgVmM
-
Rendezvous
https://t1.daumcdn.net/cfile/tistory/997D5A3E5A62BD8308
Sik-K
3:06
https://www.youtube.com/watch?v=PCNtCo5yTRk
-
B.T.W
https://i.ytimg.com/vi/cUAsTQUU3xk/hqdefault.jpg
Jay B (ft Jay Park)
3:16
https://www.youtube.com/watch?v=cUAsTQUU3xk
*/


let songNames = ["girl", "Amusement Park", "Rendezvous", "B.T.W"];
let songImages = [
  "https://m.media-amazon.com/images/I/A1k-6m4xbqL._SS500_.jpg",
  "https://i0.wp.com/colorcodedlyrics.com/wp-content/uploads/2020/12/Baekhyun-Amusement-Park.jpg?fit=1000%2C1000&ssl=1",
  "https://t1.daumcdn.net/cfile/tistory/997D5A3E5A62BD8308",
  "https://i.ytimg.com/vi/cUAsTQUU3xk/hqdefault.jpg",
];
let artists = ["oceanfromtheblue", "Baekhyun", "Sik-K", "Jay B (ft. Jay Park)"];
let songLengths = ["3:40", "4:17", "3:06", "3:16"];
let links = [
  "https://www.youtube.com/watch?v=8O720os7tnw",
  "https://www.youtube.com/watch?v=5nNIRDfgVmM",
  "https://www.youtube.com/watch?v=PCNtCo5yTRk",
  "https://www.youtube.com/watch?v=cUAsTQUU3xk",
];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function

  songNames.forEach(function (name) {
    $(".songs").append(`<li>${name}</li>`);
  });

  songImages.forEach(function (image) {
    $(".images").append(`<img src=${image}/>`);
  });

  artists.forEach(function (artist) {
    $(".artists").append(`<li>${artist}</li>`);
  });

  songLengths.forEach(function (length) {
    $(".lengths").append(`<li>${length}</li>`);
  });

  links.forEach(function (url) {
    $(".links").append(`<li>${url}</li>`);
  });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
