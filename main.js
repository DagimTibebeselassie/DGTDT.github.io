// alert("Javascript");
function showAlert() {
  alert ("Hello world!");
}
var name = "dagim";
alert("hello " + name);

showAlert();

var button = document.querySelector("button");
var countclicks = 0;

button.addEventListener('click', function() {
  countclicks += 1;
  console.log(countclicks);
})
