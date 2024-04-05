var listFairyTales = {
    "1": {
        'title':'Кот Леопольд',
        "link":"https://www.youtube.com/watch?v=vQHW4vORqRw"
    },
    
    "2": {
        'title':'Мойдодыр ',
        "link":"https://www.youtube.com/watch?v=oWhalHZXLUw"
    },

    "3": {
        'title':'Умка',
        "link":"https://www.youtube.com/watch?v=WrbLPeb_dOw"
    }
}

var random = '0'
var linkCartoon = ''

function installFairyTale(){
    var fairy = document.getElementById("fairy")
    var random = String(Math.floor(Math.random() * 3)+1);
    linkCartoon = listFairyTales[random].link
    fairy.textContent = listFairyTales[random].title
}


function transitionToAFairyTale(){
    window.open(linkCartoon)
}

function WriteNo(){
    alert("Тогда держи другой мультик!")
    installFairyTale()
}

var modal = document.getElementById('id01');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}