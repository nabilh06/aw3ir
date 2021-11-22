window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
   // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log( "DOM ready!" );
    // Y mettre le code Javascript pour valider tous les champs du formulaire
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateDate(date){
  let dateNaissance = new Date(date); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
let dateNaissanceTimestamp = dateNaissance.getTime();
  let nowTimestamp = Date.now()
if (dateNaissanceTimestamp > nowTimestamp) {
  return false
}
return true
}

function validateLenght(name,name2,email,address) {
  email.length
  if (email.length>4 && name.length>4 && name2.length>4 && address.length>4) {
    return true;
  }else {
    return false ;
  }
}

document.querySelector("#submit").addEventListener("click", function(event){
  event.preventDefault();

  var name =document.querySelector("#name").value;
  var name2 =document.querySelector("#name2").value;
  var date =document.querySelector("#date").value;
  var address =document.querySelector("#address").value;
  var email =document.querySelector("#email").value;
  if (validateLenght(name,name2,email,address) && validateEmail(email) ) {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
  }
});
