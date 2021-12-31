function mobilMenu() {
    $(".menu-close").click(() => {
        $(".nav-menu").css("left", "-20rem");
    })
    $(".nav-mobilmenu").click(() => {
        $(".nav-menu").css("left", "0");
    })
}
$(".hizmetler-title p").click(function() {
    $(".hizmetler-title .active").removeClass("active");
    $(this).addClass("active");
})

window.addEventListener("load", () => {
    mobilMenu();
})

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide( '.hizmetler-wrapper', {
        perPage: 3,
        gap    : '2rem',
        breakpoints: {
          640: {
            perPage: 2,
            gap    : '.7rem'
          },
          480: {
            perPage: 1,
            gap    : '.7rem'
          },
        },
      } );
      
      splide.mount();
});


$(window).scroll(function() {
  if( $(window).scrollTop() > 50 ) {
    $(".navmenu-wrapper").css("position", "fixed");
      if ($(window).width() <= 700) {
        $(".navmenu-wrapper").css("--tw-shadow", "0 2.65546px 95px rgba(0,0,0,.1)");
      }
  }else if( $(window).scrollTop() == 0 ) {
    $(".navmenu-wrapper").css("position", "relative");
    if ($(window).width() <= 700) {
      $(".navmenu-wrapper").css("--tw-shadow", "0 0 #0000");
    }else {
      $(".navmenu-wrapper").css("--tw-shadow", "0 2.65546px 95px rgba(0,0,0,.1)");
    }
  }
})
// $(window).width(function() {
//   if ($(window).width() <= 480) {
//     $(".kesfet").html("Keşfet");
//   }else {
//     $(".kesfet").html("Hizmetleri Keşfedin");
//   }
// }) 

