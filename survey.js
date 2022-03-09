/*function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
*/
/*

function CounterChecker() {
    console.log('This button clicked')
    var a = document.getElementsByTagName('input')
    console.log(a);

    for (var i = 0; i < a.length; i++) {
        if (document.getElementById('value' + i)).value !== '') {
            a = a + 1;
        }
    }
    document.getElementById("Hello").innerHTML = a;

}

function Counter() {
    var count = 0;
    
    for (i = 0; i < 4; i++) {
        if (document.getElementById("value" + i).value !=='') {
            count = count + 1;
         }
    }
    document.getElementById("Hello").innerHTML = count;
}



function checkboxes(){
    var inputElems= document.getElementsByTagName("input");
     var count2=0;
    for(var i=0;i<inputElems.length;i++){
        if(inputElems[i].type=="checkbox" && inputElems[i].checked===true){
            count2++;
        }
    }
    document.getElementById("checkbox").innerHTML = count2;

}




function radio(){
    var inputElement=document.getElementsByTagName("input");
    console.log(inputElement);
    var count3=0;
    for(var i=0;i<inputElement.length;i++){
        if(inputElement[i].checked){
            count3++;
        }
    }
    document.getElementById("radio").innerHTML=count3;
}



function CounterChecker() {
    console.log('This button clicked')
}
  
  
  
    var a = document.getElementsByTagName('input')
    console.log(a);

    for (var i = 0; i < a.length; i++) {
        if (document.getElementById('value' + i)).value !== '') {
            a = a + 1;
        }
    }
    document.getElementById("Hello").innerHTML = a;

}




*/


function CounterChecker() {
    var count = 0;

    for (i = 0; i < 4; i++) {
        if (document.getElementById("value" + i).value !=='') {
            count = count + 1;
        }
    }
    document.getElementById("Hello").innerHTML = count;
}

/*
function checkboxes(){
    var inputElems= document.getElementsByTagName("input");
     var count2=0;
    for(var i=0;i<inputElems.length;i++){
        if(inputElems[i].type=="checkbox" && inputElems[i].checked===true){
            count2++;
        }
    }
    document.getElementById("checkbox").innerHTML = count2;

}


function radio(){
    var inputElement=document.getElementsByTagName("input");
    console.log(inputElement);
    var count3=0;
    for(var i=0;i<inputElement.length;i++){
        if(inputElement[i].checked){
            count3++;
        }
    }
    document.getElementById("radio").innerHTML=count3;
}
*/