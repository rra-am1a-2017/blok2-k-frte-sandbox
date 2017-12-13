// section#js01
//##################################################################
function hoverActie() {        
  console.log("Er over de knop gehoverd");
  alert("Kijk in de console voor een mooie tekst");
}


function test() {
  // alert('Ik wens je succes!');
  console.log('Dit stukje tekst wordt u aangeboden door de Hema');
  // alert('Hoi');
}


function vaarwel() {
  alert("Tot ziens!");
  console.log("Tot ziens!");
}

function schrijf_tekst() {
  // Hier plaats ik een handvat op mijn inputtag
  var inputtag = document.getElementById("watTekst");

  // Hier plaats ik een handvat op mijn p-tag        
  var mijnOutputParagraaf = document.getElementById("mijnOutput");

  mijnOutputParagraaf.innerHTML = "<h5>Mijn naam is: " + inputtag.value + "</h5>";
}

function wis_site() {
    document.write("Ik heb per ongeluk de site overschreven");
}

//###############################################################################

// section#js03 
// ##############################################################################
var fruit = ["meloen", "sinaasappel", "ananas"];
var p_tag = document.getElementById("showArray");
var p_tagAdd = document.getElementById("p_tagAdd");

p_tagAdd.innerHTML = showArrayForLoop();

// Maak een selector voor je p#showArray in een functie
function showArray() {
  // alert("Hoi");  
  p_tag.innerHTML = "De inhoud van het array is: " + fruit;
}

function showArrayForLoop() {
  var outputText = "<ol>"
  var output = "";
  for (var i = 0; i < fruit.length; i++) {
    output = output + "<li>" + fruit[i] + "</li>";
  }
  outputText = outputText + output;
  outputText = outputText + "</ol>";  
  return outputText;
}

function showArrayOl() {
  p_tag.innerHTML = showArrayForLoop();
}

function btn_push() {
  var input_push = document.getElementById("input_push");

  // info over pushen vind je hier https://www.w3schools.com/js/js_array_methods.asp
  fruit.push(input_push.value);
  p_tagAdd.innerHTML = showArrayForLoop();
  input_push.value = "";
}

function btn_unshift() {
  var input_unshift = document.getElementById("input_unshift");

  // info over pushen vind je hier https://www.w3schools.com/js/js_array_methods.asp
  fruit.unshift(input_unshift.value);
  p_tagAdd.innerHTML = showArrayForLoop();
  input_unshift.value = "";
}





