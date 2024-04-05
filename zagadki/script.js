
function GuessOtgadai(){

    var otv1 = document.getElementById("otgadai").value;
    var result = document.getElementById("result");
    var img = document.getElementById("img");

    if (otv1.toLowerCase() ==="зонтик" ){
       result.textContent = "Правильно. Вы молодец!";
       image.src = "class.gif";
       image.style.display="block";
    } else {
        result.textContent = "Неправильно. Угадай ещё раз";
        image.src="plocho.gif";
        image.style.display="block";
    
    }
} 
function GuessOtgadai2(){

    var otv2 = document.getElementById("otgadai2").value;
    var result = document.getElementById("result2");
    var img = document.getElementById("img");

    if (otv2.toLowerCase() ==="рюкзак" ){
       result2.textContent = "Правильно. Вы молодец!";
       image2.src = "class.gif";
       image2.style.display="block";
    } else {
        result2.textContent = "Неправильно. Угадай ещё раз";
        image2.src = "plocho.gif";
        image2.style.display="block";
    
    }
} 