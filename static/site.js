(function() {

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                               window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                               
  var Site = function() {
    this.header = new Header(this);
    this.footer = new Footer(this);
  }

  Site.prototype.frame = function() {
    
    this.header.frame();
    this.footer.frame();

    if(this.running) {
      requestAnimationFrame(this.frame.bind(this));
    }
  }

  Site.prototype.run = function() {
    this.running = true;
    this.frame();
  }

  var Header = function(site) {
    this.site = site;
    this.element = document.getElementById("header");
    this.counter = 0;
  }

  Header.prototype.frame = function() {
    this.element.innerText = (this.counter++);
  }

  var Footer = function(site) {
    this.site = site;
    this.element = document.getElementById("footer");
    this.counter = 0;
  }

  Footer.prototype.frame = function() {
    this.element.innerText = (this.counter++);
  }

  window.Site = Site;

})();

var site = new Site();
site.run();
