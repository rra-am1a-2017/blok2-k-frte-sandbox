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
