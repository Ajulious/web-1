var inputs = document.getElementsByTagName("input");
for(var i=0; i<inputs.length - 1; i++){
    inputs[i].onclick = plus;
}

function plus(event){
    var btn = event.target;
    var now = btn.value;
    btn.value = (parseInt(now) + 1);
}

function resetValues(value1, value2, value3) {
    inputs[0].value = value1;
    inputs[1].value = value2;
    inputs[2].value = value3;
    }
