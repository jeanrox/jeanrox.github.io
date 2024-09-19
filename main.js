document.addEventListener("DOMContentLoaded", function () {
  // Quitar la clase 'container' cuando la página está completamente cargada
  document.body.classList.remove("container");

  // Añade la clase 'loaded' al body después de un pequeño retraso para la animación de las flores
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 500);

  var silentAudio = document.getElementById("silent-audio");
  var audio = document.getElementById("background-music");

  // Intenta reproducir el audio silencioso
  silentAudio
    .play()
    .then(function () {
      // Ahora intenta reproducir el audio principal después de que el audio silencioso haya comenzado
      audio
        .play()
        .then(function () {
          console.log("La música está reproduciéndose.");
          // No es necesario volver a añadir la clase 'loaded' aquí si ya lo hiciste antes
        })
        .catch(function (error) {
          console.error(
            "Error al intentar reproducir el audio principal: ",
            error
          );
        });
    })
    .catch(function (error) {
      console.error(
        "Error al intentar reproducir el audio silencioso: ",
        error
      );
    });
});
