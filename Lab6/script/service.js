
let filter;

var times = {
    "Any": anytime [6,0],
    "Giorgio Frigo": [5,1,2,3],
    "Julie Lope": [0,2,4,6],
    "Megan Kole": [1,2,3,4]
};




$(document).ready(function(){

    var expert = $("#expert");
    var calendar = $("#datetime");
    date();

    $("#datetime").datetime({
        disabledWeekDays: filter
    });
    
    $('#toggle').on("click", function(){
        $('#datetime').datetime("show");
    });

    $("#expert").on("change", function(){
        
        $('#datetime').datetime("destroy");
        date();
        var container = document.getElementById("holdCalendar");
        var content = container.innerHTML;
        container.innerHTML= " "; 
        container.innerHTML= content; 
        $("#datetime").datetime({
            disabledWeekDays: filter
        });
        $('#toggle').on("click", function(){
            $('#datetime').datetime("show");
        });  
    });

    
    function date(){
        filter = times[ expert.children("option:selected").text()];
        return filter;
    };



});