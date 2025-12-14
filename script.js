$(document).ready(function() {
  // Set current year in footer
  $('#currentYear').text(new Date().getFullYear());
  
  // Navbar scroll effect
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
    
    // Show/hide back to top button
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').addClass('visible');
    } else {
      $('.back-to-top').removeClass('visible');
    }
    
    // Active nav link on scroll
    var scrollPos = $(document).scrollTop() + 100;
    $('section').each(function() {
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      var id = $(this).attr('id');
      
      if (scrollPos >= top && scrollPos <= bottom) {
        $('.nav-link').removeClass('active');
        $('.nav-link[href="#' + id + '"]').addClass('active');
      }
    });
  });
  
  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    
    var target = this.hash;
    var $target = $(target);
    
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 80
    }, 800, 'swing', function() {
      window.location.hash = target;
    });
  });
  
  // Navbar close on mobile after click
  $('.navbar-nav .nav-link').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });
  
  // Contact buttons functionality
  $('.contact-cta .btn-primary').on('click', function(e) {
    if (!$(this).attr('href')) {
      e.preventDefault();
      window.location.href = 'mailto:exytonsolutions@gmail.com';
    }
  });
  
  // Animate elements on scroll
  function animateOnScroll() {
    $('.reveal').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      
      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass('animated');
      }
    });
  }
  
  // Initialize animations
  animateOnScroll();
  $(window).on('scroll', animateOnScroll);
  
  // Typing effect for hero title
  function typeWriter() {
    const title = $('.hero-title .text-gradient');
    const text = title.text();
    title.text('');
    
    let i = 0;
    function type() {
      if (i < text.length) {
        title.append(text.charAt(i));
        i++;
        setTimeout(type, 100);
      }
    }
    setTimeout(type, 1000);
  }
  
  // Start typing effect after page loads
  setTimeout(typeWriter, 500);
  
  // Add hover effect to cards
  $('.skill-card, .project-card, .team-card, .info-card, .about-content-card').hover(
    function() {
      $(this).css('transform', 'translateY(-10px)');
    },
    function() {
      $(this).css('transform', 'translateY(0)');
    }
  );
  
  // Initialize tooltips
  $('.footer-social a').tooltip({
    trigger: 'hover',
    placement: 'top'
  });
  
  // Add loading animation
  $(window).on('load', function() {
    $('body').addClass('loaded');
  });
  
  // Parallax effect for hero section
  $(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();
    $('.hero-section::before').css('transform', 'translateY(' + (scrolled * 0.5) + 'px)');
  });
  
  // WhatsApp direct click handler
  $('a[href*="whatsapp"]').on('click', function() {
    gtag('event', 'whatsapp_click', {
      'event_category': 'Contact',
      'event_label': 'WhatsApp Contact'
    });
  });
});