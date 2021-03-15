AOS.init({
    duration: 900,
    delay: 0,
    easing: 'ease-in-out-back',
});

AOS.refresh();


$(document).ready(function () {

    $("#down").click(function(){
        $('html, body').animate({
        scrollTop:$("#week1").offset().top - 100
        }, 1000);
    });     


    $("#timeline").on("click", "li", function(){
        $("#timeline li.selected").removeClass("selected"); // reset all <li> to no active class
        $(this).addClass("selected");
    });

    $("#timelineWeek1").click(function(){
        $('html, body').animate({
        scrollTop:$("#week1").offset().top 
        }, 1000);
    });

    $("#timelineWeek2").click(function(){
        $('html, body').animate({
        scrollTop:$("#week2").offset().top 
        }, 1000);
    });

    $("#timelineWeek3").click(function(){
        $('html, body').animate({
        scrollTop:$("#week3").offset().top 
        }, 1000);
    });


    $("#timelineWeek4").click(function(){
        $('html, body').animate({
        scrollTop:$("#week4").offset().top 
        }, 1000);
    });


    $("#timelineWeek5").click(function(){
        $('html, body').animate({
        scrollTop:$("#week5").offset().top 
        }, 1000);
    });


    $("#timelineWeek6").click(function(){
        $('html, body').animate({
        scrollTop:$("#week6").offset().top 
        }, 1000);
    });


    $("#timelineWeek7").click(function(){
        $('html, body').animate({
        scrollTop:$("#week7").offset().top 
        }, 1000);
    });


    $("#timelineWeek8").click(function(){
        $('html, body').animate({
        scrollTop:$("#week8").offset().top
        }, 1000);
    });


    $("#timelineWeek9").click(function(){
        $('html, body').animate({
        scrollTop:$("#week9").offset().top 
        }, 1000);
    });       

    $("#timelineWeek10").click(function(){
        $('html, body').animate({
        scrollTop:$("#week10").offset().top 
        }, 1000);
    });   
    
    $("#timelineReflection").click(function(){
        $('html, body').animate({
        scrollTop:$("#reflection").offset().top 
        }, 1000);
    });   
});

window.addEventListener("scroll", function() {
    const week1 = document.getElementById("week1");
    const week2 = document.getElementById("week2");
    const week3 = document.getElementById("week3");
    const week4 = document.getElementById("week4");
    const week5 = document.getElementById("week5");
    const week6 = document.getElementById("week6");
    const week7 = document.getElementById("week7");
    const week8 = document.getElementById("week8");
    const week9 = document.getElementById("week9");
    const week10 = document.getElementById("week10");
    const reflection = document.getElementById("reflection");

    // Week1 
    if ((window.scrollY > week1.offsetTop - 400) && (window.scrollY < week2.offsetTop - 400))  {
        document.getElementById("timelineWeek1").style.cssText = "font-weight: 700; color: #7988FD";
    }
    else {
        document.getElementById("timelineWeek1").style.cssText = "font-weight: 400; color: #B7B7B7";
    }

    // Week2
    if ((window.scrollY > week2.offsetTop - 400) && (window.scrollY < week3.offsetTop - 400))  {
        document.getElementById("timelineWeek2").style.cssText = "font-weight: 700; color: #7988FD";

    }
    else{
        document.getElementById("timelineWeek2").style.cssText = "font-weight: 400; color: #B7B7B7";
    }

    // Week3
    if ((window.scrollY > week3.offsetTop - 400) && (window.scrollY < week4.offsetTop - 400))  {
        document.getElementById("timelineWeek3").style.cssText = "font-weight: 700; color: #7988FD";
    }
    else{
        document.getElementById("timelineWeek3").style.cssText = "font-weight: 400; color: #B7B7B7";
    }

    // Week4
    if ((window.scrollY > week4.offsetTop - 400) && (window.scrollY < week5.offsetTop - 400))  {
        document.getElementById("timelineWeek4").style.cssText = "font-weight: 700; color: #7988FD";
    }
    else{
        document.getElementById("timelineWeek4").style.cssText = "font-weight: 400; color: #B7B7B7";
    }

    // Week 5
    if ((window.scrollY > week5.offsetTop - 400) && (window.scrollY < week6.offsetTop - 400))  {
        document.getElementById("timelineWeek5").style.cssText = "font-weight: 700; color: #7988FD";
    }
    else{
        document.getElementById("timelineWeek5").style.cssText = "font-weight: 400; color: #B7B7B7";
    }

    // Week 6
    if ((window.scrollY > week6.offsetTop - 400) && (window.scrollY < week7.offsetTop - 400))  {
        document.getElementById("timelineWeek6").style.cssText = "font-weight: 700; color: #7988FD";
    }
    else{
        document.getElementById("timelineWeek6").style.cssText = "font-weight: 400; color: #B7B7B7";
    }

    // Week 7
    if ((window.scrollY > week7.offsetTop - 400) && (window.scrollY < week8.offsetTop - 400))  {
        document.getElementById("timelineWeek7").style.cssText = "font-weight: 700; color: #7988FD";
    }
    else{
        document.getElementById("timelineWeek7").style.cssText = "font-weight: 400; color: #B7B7B7";
    }

    // Week 8
    if ((window.scrollY > week8.offsetTop - 400) && (window.scrollY < week9.offsetTop - 400))  {
        document.getElementById("timelineWeek8").style.cssText = "font-weight: 700; color: #7988FD";
    }
    else{
        document.getElementById("timelineWeek8").style.cssText = "font-weight: 400; color: #B7B7B7";
    }

    // Week 9
    if ((window.scrollY > week9.offsetTop - 400) && (window.scrollY < week10.offsetTop - 400))  {
        document.getElementById("timelineWeek9").style.cssText = "font-weight: 700; color: #7988FD";
    }
    else{
        document.getElementById("timelineWeek9").style.cssText = "font-weight: 400; color: #B7B7B7";
    }

    // Week 10
    if ((window.scrollY > week10.offsetTop - 400) && (window.scrollY < reflection.offsetTop - 400)) {
        document.getElementById("timelineWeek10").style.cssText = "font-weight: 700; color: #7988FD";
    }
    else{
        document.getElementById("timelineWeek10").style.cssText = "font-weight: 400; color: #B7B7B7";
    }

    // Reflection
    if ((window.scrollY > reflection.offsetTop - 400) )  {
        document.getElementById("timelineReflection").style.cssText = "font-weight: 700; color: #7988FD";
    }
    else{
        document.getElementById("timelineReflection").style.cssText = "font-weight: 400; color: #B7B7B7";
    }
});
