var randomNumber = Math.round(Math.random() * 30);
$("#count").text(randomNumber);

$(document).ready(function () {
  function startRandomNumberAnimation() {
    timeInterval = setInterval(updateRandomNumber, 1700); // Každých 10 sekund
  }

  startRandomNumberAnimation();
});

function updateRandomNumber() {
  var randomNumber = Math.round(Math.random() * 30); // Můžete změnit rozsah podle potřeby
  $("#count").animate({ opacity: 0 }, 400, function () {
    // Animace změny čísla s plynulým ztracením a opětovným zobrazením
    $(this).text(randomNumber).animate({ opacity: 1 }, 400);
  });
  console.log(randomNumber);
}

function stopAnimationAndColorRed() {
  clearInterval(timeInterval);
}

$("#generate").click(() => {
  stopAnimationAndColorRed();

  setTimeout(() => {
    const totalCount = $("#totalCount").val();
    const randomNumber = Math.round(Math.random() * totalCount);
    $("#count").text(randomNumber).css("color", "red");

    console.log(`Vybrané číslo: ${randomNumber}`);
  }, 500);
  
});
