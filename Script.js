$(document).ready(function() {
  function makeDiv() {
    const w = prompt("How many blocks per side?");
    var newDim = $(".container").width() / w;
    $(".white").remove();
    for (var i = 0; i < w ** 2; i++) {
      $(".container").append('<div class="white"></div>');
    }
    $(".white").css("height", newDim);
    $(".white").css("width", newDim);
    $(".white").on("mouseover", function() {
      $(this).css("background-color", "black");
    });
  }
  // Waits until after page has loaded to ask
  setTimeout(function() {
    makeDiv();
  }, 700);

  $(".btn-default").on("click", function() {
    makeDiv();
  });

  $("#color").on("click", function() {
    var color = prompt("Enter color code or name");
    $(".white").on("mouseover", function() {
      $(this).css("background-color", color);
    });
  });
});
