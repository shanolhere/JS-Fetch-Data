const printBtn = document.querySelector(".print");

const text = document.querySelector(".text");

const result = document.querySelector(".result");

var URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";

printBtn.addEventListener("click", (textValue) => {
  textValue = text.value;
  fetch(URL + textValue)
    .then((res) => res.json())
    .then((data) => {
      result.innerHTML = `${
        data.contents.translated
      } ${data.contents.text.toUpperCase()}!!`;
    });
});
//https://2x3l3b.csb.app/
