(function () {
    var enviarMision = function (xmen) {
        console.log("Enviando a ".concat(xmen.nombre, " a la misi\u00F3n"));
    };
    var regresarMision = function (xmen) {
        console.log("".concat(xmen.nombre, " regresando"));
    };
    var wolverine = {
        nombre: 'Logan',
        edad: 23
    };
    enviarMision(wolverine);
    regresarMision(wolverine);
})();
