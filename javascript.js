let input         = document.querySelector('#prix');
let error         = document.querySelector('small');
let formulaire    = document.querySelector('#formulaire');
// Pointage de l'input, du submit et du texte erreur

error.style.display = "none";
// erreur caché

let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups           = 0;
let nombreChoisi;

// Génération aléatoire d'un chiffre + initialisation variable de choix

function verifier(nombre) {
  
    let instruction = document.createElement('div');
  
    if(nombre < nombreAleatoire) {
      // C'est plus
      instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est plus !";
      instruction.className = "instruction plus";
    }
    else if(nombre > nombreAleatoire) {
      // C'est moins
      instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est moins !";
      instruction.className = "instruction moins";
    }
    else {
      // Félicitations 
      instruction.textContent = "#" + coups + " ( " + nombre + " ) Félicitations vous avez trouvé le juste prix !";
      instruction.className = "instruction fini";
      input.disabled = true;
    }

//Vérification et comparaison.
    document.querySelector('#instructions').prepend(instruction);

}

// Vérifier que c'est bien un chiffre inséré
input.addEventListener('keyup', () => {
    if(isNaN(input.value)) {
      // Afficher le message d'erreur
      error.style.display = "inline";
    }
    else {
      // Cacher le message d'erreur
      error.style.display = "none";
    }
  });

  formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(isNaN(input.value) || input.value == ''){
       // Mettre notre bordure de formulaire en rouge (red)
      input.style.borderColor = "red";
    }
    else {
      // Mettre notre bordure de formulaire en gris (silver)
      coups++;
      input.style.borderColor = "silver";
      nombreChoisi = input.value;
      input.value = '';
      verifier(nombreChoisi);
    }
  });