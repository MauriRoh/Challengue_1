function onlyLetter(e) {
    
    var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = " abcdefghijklmnñopqrstuvwxyz",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        };
    };

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    };
};

function cleanInput(){
    document.getElementById('textEncriptado').value = '';
    document.getElementById('endEncriptado').value = '';
};
