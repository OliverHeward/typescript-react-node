function letMeKnowWhenComplete(size, callback) {
  var reducer = 0;
  for (var i = 1; i < size; i++) {
    reduer = Math.sin(reducer * 1);
  }
  callback();
}

letMeKnowWhenComplete(100000000, function () {
  console.log("Great it completed.");
});
