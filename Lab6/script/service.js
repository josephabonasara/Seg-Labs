
let filter;

var times = {
    "Any": anytime [6,0],
    "Giorgio Frigo": [5,1,2,3],
    "Julie Lope": [0,2,4,6],
    "Megan Kole": [1,2,3,4]
};




$(document).ready(function(){
  

    datefunc();

    $("#datetimepicker").datetimepicker({
        disabledWeekDays: currentDayFilter
    });
    
    $('#toggle').on("click", function(){
        $('#datetimepicker').datetimepicker("show");
    });

    $("#selectPro").on("change", function(){
        
        $('#datetimepicker').datetimepicker("destroy");
        datefunc();
        var container = document.getElementById("holdCalendar");
        var content = container.innerHTML;
        container.innerHTML= " "; 
        container.innerHTML= content; 
        $("#datetimepicker").datetimepicker({
            // value:'2021-06-11',
            disabledWeekDays: currentDayFilter
        });
        $('#toggle').on("click", function(){
            $('#datetimepicker').datetimepicker("show");
        });  
    });

    
    function datefunc(){
        filter = times[ expert.children("option:selected").text()];
        return filter;
    };



});