document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(!href || href === '#') return;
      if(href.startsWith('#')){
        var target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
          // close mobile nav if open
          if(nav && nav.classList.contains('open')){
            nav.classList.remove('open');
            if(toggle) toggle.setAttribute('aria-expanded','false');
          }
        }
      }
    });
  });
});
