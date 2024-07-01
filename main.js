onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('click', function() {
        var audio = document.getElementById('background-music');
        audio.play();
      }, { once: true });