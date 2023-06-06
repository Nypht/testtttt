window.addEventListener("load", function() {
    // Sélectionne les images du diaporama
    const images = document.querySelectorAll(".slideshow img");
    let currentIndex = 0;
  
    // Affiche la première image
    images[currentIndex].style.display = "block";
  
    // Fonction pour passer à l'image suivante
    function nextSlide() {
      // Masque l'image courante
      images[currentIndex].style.display = "none";
  
      // Passe à l'image suivante
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
  
      // Affiche l'image suivante
      images[currentIndex].style.display = "block";
    }
  
    // Démarre le diaporama toutes les 3 secondes
    setInterval(nextSlide, 3000);
  });

  // Fonction pour simuler un temps de chargement
  function simulateLoading() {
    // Ajouter une classe CSS pour afficher un indicateur de chargement
    document.body.classList.add('loading');

    // Délai de 3 secondes avant de rediriger vers la page de paiement
    setTimeout(function() {
      window.location.href = document.getElementById('buy-now-button').getAttribute('href');
    }, 5000); // 3000 millisecondes = 3 secondes
  }

  // Attacher un gestionnaire d'événement au bouton "Acheter maintenant"
  var buyNowButton = document.getElementById('buy-now-button');
  buyNowButton.addEventListener('click', simulateLoading);

