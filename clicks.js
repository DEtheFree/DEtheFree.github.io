/*global $*/
/*jslint sloppy:true, browser: true*/
$("h1.page-title").text("My code runs!");
$(window).on('mousemove', function (e) {
var mouseX=e.pageX;
    var mouseY=e.pageY;
   var imageX= parseInt($('img.logo').css("left"));
    
    var imageY= parseInt($('img.logo').css("top"));
    
    
    
    
    
    
    
    
    
    
    
    
    
    if (mouseX+100 >imageX && mouseY+100 >imageY){
    
    $('img.logo').css({left: mouseX+100,
                       top: mouseY+100});}
});

