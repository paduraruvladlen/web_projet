
function validateForm() {
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if (nom === "" || email === "" || message === "") {
        alert("Tous les champs obligatoires doivent être remplis !");
        return false;
    }
    
    if (email.indexOf('@') === -1) {
        alert("Veuillez entrer une adresse email valide !");
        return false;
    }
    
    alert("Message envoyé avec succès !");
    
    var confDiv = document.getElementById('confirmation');
    if (confDiv) {
        confDiv.style.display = "block";
        confDiv.innerHTML = "Merci " + nom + " ! Votre message a été envoyé.";
    }
    
    return false;
}


function searchPermanence() {
    var enseignant = document.getElementById('enseignant').value;
    var date = document.getElementById('date').value;
    
    var resultats = document.getElementById('resultats');
    
    if (enseignant === "" && date === "") {
        resultats.innerHTML = "<p>Veuillez sélectionner un enseignant ou une date.</p>";
    } else {
        var message = "<p>Recherche effectuée pour :<br>";
        if (enseignant !== "") message += "Enseignant: " + enseignant + "<br>";
        if (date !== "") message += "Date: " + date + "<br>";
        message += "Aucun créneau disponible pour le moment.</p>";
        
        resultats.innerHTML = message;
    }
    
    return false; 
}

window.onload = function() {
    console.log("Site EFREI chargé avec succès !");
    
    if (document.getElementById('agendaForm')) {
        console.log("Page agenda chargée");
    }
    
    if (document.getElementById('contactForm')) {
        console.log("Page contact chargée");
    }
};