//run random word on index

window.onload =
  function refreshWord() {
    const frontPageSwap = document.querySelector('front-page-text-swap');
    setInterval(function randomWord() {
      const words = ['designer', 'developer', 'illustrator', 'animator'];
      const randomGenerator = Math.floor(Math.random() * words.length);
      document.getElementById('textswap').innerHTML = words[randomGenerator];
    }, 1000);
  };







//collapse navbar when it's in mobile format
  $('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });
