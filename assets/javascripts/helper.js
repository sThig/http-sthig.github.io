// const bLazy = new Blazy({
//         breakpoints: [{
// 	    width: 420 // Max-width
//           , src: 'data-src-small'
// 	}]
//       , success: function(element){
// 	    setTimeout(function(){
// 		// We want to remove the loader gif now.
// 		// First we find the parent container
// 		// then we remove the "loading" class which holds the loader image
// 		var parent = element.parentNode;
// 		parent.className = parent.className.replace(/\bloading\b/,'');
// 	    }, 200);
//         }
//    });

window.onload = function refreshWord() {
  setInterval(function randomWord() {
    const words = ['Engineer', 'Developer', 'Illustrator', 'Cyclist', 'Artist'];
    const randomGenerator = Math.floor(Math.random() * words.length);
    document.getElementById('textswap').innerHTML = words[randomGenerator];
  }, 2000);

  // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener('click', function(e) {
  //     e.preventDefault();
  //
  //     document.querySelector(this.getAttribute('href')).scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   });
  // });

  $('.navbar-nav>li>a').on('click', function() {
    console.log('clicked');
    $('.navbar-collapse').collapse('hide');
  });
};

// $(function() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//   });
// });
