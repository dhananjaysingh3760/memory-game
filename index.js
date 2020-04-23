let count = 1;
let colorIndex;
$("body").one("keypress",function(event){
    index = Math.floor(4*Math.random()) + 1;
    makeSound(index);
    colorIndex = "" + index;
    colorId = "#color" + index;
    $(colorId).addClass("pressed");
    setTimeout(function(){
        $(colorId).removeClass("pressed");    
    },100);
    $("h1").text("Level 1");
})

let eventId;
let localCount=0;
$(".btn").click(function(event){
    let eventId = event.target.getAttribute("id").slice(5,6);
    makeSound(eventId);
    $("#color" + eventId).addClass("pressed");
    setTimeout(function(){
        $("#color" + eventId).removeClass("pressed");    
    },100);
    if(colorIndex[localCount] == eventId){
        localCount++;
    }else {
        $("h1").text("Game Over, press any key to restart");
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        count = 1;
        $("body").one("keypress",function(event){
            index = Math.floor(4*Math.random()) + 1;
            colorIndex = "" + index;
            colorId = "#color" + index;
            $(colorId).addClass("pressed");
            setTimeout(function(){
                $(colorId).removeClass("pressed");    
            },100);
            $("h1").text("Level 1");
        })
    }

    if(count == localCount){
        localCount = 0;
        count++;
        $("h1").text("Level " + count);
        index = Math.floor(4*Math.random()) + 1;
        makeSound(index);
        colorIndex = colorIndex + index;
        colorId = "#color" + index;
        
        setTimeout(function(){
            $(colorId).addClass("pressed");   
        },500);

        setTimeout(function(){
            $(colorId).removeClass("pressed"); 
        },600)
    }
})

function makeSound(index){
    switch(index){
        case "1":
            var audio = new Audio('sounds/green.mp3');
            audio.play();
            break;
        case "2":
            var audio = new Audio('sounds/red.mp3');
            audio.play();
            break;
        case "3":
            var audio = new Audio('sounds/yellow.mp3');
            audio.play();
            break;
        case "4":
            var audio = new Audio('sounds/blue.mp3');
            audio.play();
    }
}