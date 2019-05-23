function Indeks() {
  var txt = "abcdefghijklm";
  var pos = txt.indexOf("h");
  document.getElementById("pozicija").innerHTML = pos;
}

function Izdvoji() {
  var txt = "I can eat bananas all day";
  var x = txt.slice(10, 17);
  document.getElementById("rec").innerHTML = x;
}

function Zameni() {
  var txt = "Hello World";
  txt = txt.replace("Hello", "Welcome");
  document.getElementById("zamena").innerHTML = txt;
}

function VelikaSlova() {
  var txt = "Hello World";
  txt = txt.toUpperCase();
  document.getElementById("velikaSlova").innerHTML = txt;
}

function MalaSlova() {
  var txt = "Hello World";
  txt = txt.toLowerCase();
  document.getElementById("malaSlova").innerHTML = txt;
}

function Spajanje() {
  var str1 = "Hello ";
  var str2 = "World";
  var result = str1.concat(str2);
  document.getElementById("spojeneReci").innerHTML = result;
}

function Zbir() {
  var x = Number(document.getElementById("PrviBroj").value);
  var y = Number(document.getElementById("DrugiBroj").value);
  document.getElementById("rezultat").innerHTML = x + y;
}

function Razlika() {
  var x = document.getElementById("PrviBroj").value;
  var y = document.getElementById("DrugiBroj").value;
  document.getElementById("rezultat").innerHTML = x - y;
}

function Mnozenje() {
  var x = document.getElementById("PrviBroj").value;
  var y = document.getElementById("DrugiBroj").value;
  document.getElementById("rezultat").innerHTML = x * y;
}

function Deljenje() {
  var x = document.getElementById("PrviBroj").value;
  var y = document.getElementById("DrugiBroj").value;
  document.getElementById("rezultat").innerHTML = x / y;
}

function Ostatak() {
  var x = document.getElementById("PrviBroj").value;
  var y = document.getElementById("DrugiBroj").value;
  var z = x % y;
  document.getElementById("rezultat").innerHTML = z;
}

function AlertTxt() {
  var str1 = "Ovo je ";
  var str2 = '"Alert" tekst.';
  document.getElementById(txt).innerHTML = alert(str1 + str2);
}

function rtn() {
  var str = "Neka vracena vrednost";
  return str;
}

function rtnHandler() {
  document.getElementById("rtnTxt").innerHTML = rtn();
}

function obj() {
  var person = {
    firstName: "Harry",
    lastName: "Potter",
    age: 20
  };

  document.getElementById("objTxt").innerHTML = alert(
    person.firstName + " is " + person.age
  );
}

function lng() {
  var txt = "Hello World!";
  var x = txt.length;

  document.getElementById("lngTxt").innerHTML = x;
}

function niz() {
  var cars = ["Saab", "Volvo", "BMW"];
  var x = cars[1];

  document.getElementById("nizVrednost").innerHTML = x;
}

function zamenaVrNiza() {
  var cars = ["Volvo", "Jeep", "Mercedes"];
  cars[0] = "Ford";

  document.getElementById("zamVrNiza").innerHTML = cars;
}

function brNiza() {
  var cars = ["Volvo", "Jeep", "Mercedes"];
  return cars.length;
}

function popMetod() {
  var fruits = ["Banana", "Orange", "Apple"];
  fruits.pop();

  document.getElementById("popVrednost").innerHTML = fruits;
}

function pushMetod() {
  var fruits = ["Banana", "Orange", "Apple"];
  fruits.push("Kiwi");

  document.getElementById("pushVrednost").innerHTML = fruits;
}

function spliceMetod() {
  var fruits = ["Banana", "Orange", "Apple"];
  fruits.splice(1, 1);

  document.getElementById("spliceVrednost").innerHTML = fruits;
}

function concatMetod() {
  var girls = ["Ivuska", "Anicka"];
  var boys = ["Ivan", "Mark", "Robert"];
  var children = girls.concat(boys);

  document.getElementById("concatVrednost").innerHTML = children;
}

function sortMetod() {
  var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
  fruits.sort();

  document.getElementById("sortVrednost").innerHTML = fruits;
}

function alertDatum() {
  var d = new Date();
  alert(d);
}

function alertGodina() {
  var d = new Date();
  year = d.getFullYear();
  alert(year);
}

function alertMesec() {
  var d = new Date();
  month = d.getMonth();
  alert(month);
}

function setGodinu() {
  var d = new Date();
  d.setFullYear(2020);
  alert(d);
}

function ifStatement() {
  var x = document.getElementById("vrednostX").value;
  var y = document.getElementById("vrednostY").value;

  if (x > y) {
    alert("Hello world");
  } else {
    alert("Goodbay");
  }
}

function switchStatement() {
  var voce = document.getElementById("voce").value;

  switch (voce) {
    case "Banana":
      alert("Hello");
      break;
    case "Apple":
      alert("Welcome");
      break;
    default:
      alert("Neither");
      break;
  }
}

function forBrojevi() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}

function forNiz() {
  var fruits = ["Apple", "Orange", "Kiwi"];

  for (x in fruits) {
    console.log(x);
  }
}

function whileBrojevi() {
  var i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }
}

function whileBrojevi2() {
  var i = 0;
  while (i < 10) {
    console.log(i);
    i = i + 2;
  }
}

function for5() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
      break;
    }
  }
}

function jump5() {
  for (var i = 0; i < 10; i++) {
    if (i == 5) {
      continue;
    }
    console.log(i);
  }
}

function promenaPoId() {
  document.getElementById("idPromena").innerHTML = "Hello";
}

function promenaPoTag() {
  document.getElementsByTagName("span")[0].innerHTML = "Hello";
}

function promenaPoKlasi() {
  document.getElementsByClassName("klasaPromena")[0].innerHTML = "Hello";
}

function promenaImg() {
  document.getElementById("slika").src = "slika2.jpg";
}

function promenaInput() {
  document.getElementById("myText").value = "Welcome";
}

function Dan(){
  const today = new Date();
  const day = today.getDay();
  const daylist = ["Sanday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

  let prepend = (hour >= 12) ? "PM" : "AM";
  hour = (hour >= 12) ? hour - 12 : hour;

  if(hour === 0 && prepend === "PM"){
    if(minute === 0 && second === 0){
      hour = 12;
      prepend = "Noon";
    }
    else{
      hour = 12;
      prepend = "PM"
    }
  }

  if(hour === 0 && prepend === "AM"){
    if(minute === 0 && second === 0){
      hour = 12;
      prepend = "Midnight";
    }
    else{
      hour = 12;
      prepend = "AM"
    }
  }

  console.log("Today is: " + daylist[day]);
  console.log(`Current time: ${hour} ${prepend} : ${minute} : ${second}`);
}

function stampaj(){
  window.print();
}

function randomBroj(){
  var rnd = Math.random();
  alert(rnd);
}

function vratiBroj(){
  var x = Math.max(10, 20);

  return alert(x);
}

function roundBroj(){
  var x = Math.round(5.4);

  alert(x);
}

function sqrtBroj(){
  var x = Math.sqrt(9);

  alert(x);
}

function vece(){
  x = 10;
  y = 5;

  alert(x > y);
}

function jednako(){
  x = 6;
  y = 6;

  alert(x == y);
}

function nejednako(){
  x = 8;
  y = 4;

  alert(x != y);
}

function glas(){
  var age = document.getElementById("godine").value;

  var can_vote = (age < 18) ? "Too young" : "Old enough";

  alert(can_vote);
}
