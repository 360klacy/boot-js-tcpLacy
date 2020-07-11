$(".changeBtn1").click(function(){
    console.log("working click");

    $(".firstDiv").addClass("firstDivNew");
})

$(".changeBtn2").click(function(){
    console.log("working click 2");

    $(".secondDiv").css("background", "yellow");
    $(".secondDiv").css("border-color", "blue");
})

$(".changeBtn3").click(function(){
    console.log("working click 3");

    $(".thirdDiv").css("background", "orange");
    $(".thirdDiv").css("border-color", "purple");
})

$(".changeAllBtn").click(function(){
    console.log("working click all");

    $(".firstDiv").addClass("changeAllColors");
})


// document.getElementsByClassName(changeBtn1);