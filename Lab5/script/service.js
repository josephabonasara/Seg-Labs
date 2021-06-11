function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    
    var filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateHelper(type){
    if (type=="phone"){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("(xxxx)");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    }   
}