var controller = new ScrollMagic.Controller()
var scene = new ScrollMagic.Scene({
    triggerElement: ".triggered",
    offset: -350

}).setClassToggle(".triggered", "fade-in")
    .addTo(controller)


var scene2 = new ScrollMagic.Scene({
    triggerElement: ".triggered2",
    offset: -350
}).setClassToggle(".triggered2", "fade-in")
    .addTo(controller)

var scene3 = new ScrollMagic.Scene({
    triggerElement: ".triggered3",
    offset: -350
}).setClassToggle(".triggered3", "fade-in")
    .addTo(controller)