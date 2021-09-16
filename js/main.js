var elFormName = document.querySelector(".form-exam");

var yiqildi = 50;

var supper = 65;

var kontrakt = 80;

var budjet = 100;

elFormName.addEventListener("submit", function (evt) {
  evt.preventDefault();

var elInputNumber = document.querySelector('.examBall').value.trim();

var elInputCheck = document.querySelector('.checkForm');

if (elInputCheck.checked) {
  document.querySelector('.examResultOutput').textContent = "Imtiyozli qabul qilindingiz!";
}

else if(elInputNumber <= yiqildi) {
  document.querySelector('.examResultOutput').textContent = "Afsus imtihondan o`ta olmadingiz :(";
}

else if( yiqildi <= elInputNumber && elInputNumber <= supper) {
  document.querySelector('.examResultOutput').textContent = "Siz supper kontrak asosida qabul qilindingiz";
}

else if( supper <= elInputNumber && elInputNumber <= kontrakt) {
  document.querySelector('.examResultOutput').textContent = "Siz kontrak asosida qabul qilindingiz";
}

else if ( kontrakt <= elInputNumber && elInputNumber <= budjet) {
  document.querySelector('.examResultOutput').textContent = "Siz grand asosida qabul qilindingiz";
}

else {
  document.querySelector('.examResultOutput').textContent = "Mavjud bo`lmagan raqam kiritildi";
}

});

