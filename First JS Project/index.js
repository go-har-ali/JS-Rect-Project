var rectangle = document.querySelector("#center");

rectangle.addEventListener("mousemove", function(details){
    
    var rectangleLocation = rectangle.getBoundingClientRect();
    
    var inSideRectVal = details.clientX - rectangleLocation.left;
    
    if(inSideRectVal < rectangleLocation.width/2){
        
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, inSideRectVal);

        gsap.to(rectangle, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        });
    }else{
        
        var blueColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, inSideRectVal);

        gsap.to(rectangle, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });
    }
});

rectangle.addEventListener("mouseleave", function(){
    gsap.to(rectangle, {
        backgroundColor: "white",
    })
})