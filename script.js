const homeScreen = document.getElementById('home-screen')

let titleLineDrawing1 = anime({
    targets: '#titleLineDrawing1 .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2800,
    direction: 'alternate',
    loop:true
  });



  let titleLineDrawing2 = anime({
    targets: '#titleLineDrawing2 .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2800,
    delay: 2600,
    direction: 'alternate',
    loop:true
  });

