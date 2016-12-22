
function myScript(){
    console.log("Script loaded...");
    
    $('.navMenu li').hover(function(){
        console.log("hover in");
        $('ul', this).fadeIn();
    },
                          function(){
        console.log("hover out");
        $('ul', this).fadeOut();
    });
}