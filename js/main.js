document.body.style.backgroundImage = "linear-gradient(#4ca1af, #c4e0e5)";

var elFormName = document.querySelector(".form-exam");

var yiqildi = 50;

var supper = 65;

var kontrakt = 80;

var budjet = 100;

elFormName.addEventListener("submit", function (evt) {
  evt.preventDefault();

var elInputNumber = document.querySelector('.examBall').value.trim();

var elInputCheck = document.querySelector('.checkForm');

if (elInputNumber < 0) {
  document.querySelector('.examResultOutput').textContent = "0 va undan katta son kiriting!";
  document.querySelector('.examResultOutput').style.backgroundColor = "black";
}

else if (elInputCheck.checked) {
  document.querySelector('.examResultOutput').textContent = "Imtiyozli qabul qilindingiz!";
  document.querySelector('.examResultOutput').style.backgroundColor = "yellow";
}

else if(elInputNumber <= yiqildi) {
  document.querySelector('.examResultOutput').textContent = "Afsus imtihondan o`ta olmadingiz :(";
  document.querySelector('.examResultOutput').style.backgroundColor = "red";
}

else if( yiqildi <= elInputNumber && elInputNumber <= supper) {
  document.querySelector('.examResultOutput').textContent = "Siz supper kontrak asosida qabul qilindingiz";  document.querySelector('.examResultOutput').style.backgroundColor = "red";
  document.querySelector('.examResultOutput').style.backgroundColor = "orangered";
}

else if( supper <= elInputNumber && elInputNumber <= kontrakt) {
  document.querySelector('.examResultOutput').textContent = "Siz kontrak asosida qabul qilindingiz";
  document.querySelector('.examResultOutput').style.backgroundColor = "orange";
}

else if ( kontrakt <= elInputNumber && elInputNumber <= budjet) {
  document.querySelector('.examResultOutput').textContent = "Siz grand asosida qabul qilindingiz";
  document.querySelector('.examResultOutput').style.backgroundColor = "green";
}

else {
  document.querySelector('.examResultOutput').textContent = "Raqam kiriting!";
  document.querySelector('.examResultOutput').style.backgroundColor = "blue";
}

});

