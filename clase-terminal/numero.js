
document.getElementById("Intentar").addEventListener("click", verificarNumero);
    

document.getElementById("Reiniciar").addEventListener("click", reiniciarJuego);
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;

    function verificarNumero() {
        let entradaUsuario = document.getElementById("numero").value;
        let mensaje = document.getElementById("mensaje");

        intentos++;

        if (entradaUsuario == numeroSecreto) {
            mensaje.innerHTML = `🎉 ¡Felicidades! Acertaste el número en ${intentos} intentos.`;
            mensaje.style.color = "green";
            document.body.style.backgroundColor = "#d4edda";
            document.getElementById("boton").disabled = true;
        } else if (entradaUsuario < numeroSecreto) {
            mensaje.innerHTML = "El número es mayor.";
            mensaje.style.color = "blue";
        } else {
            mensaje.innerHTML = "El número es menor.";
            mensaje.style.color = "red";
        }
    }

    function reiniciarJuego() {
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        intentos = 0;
        document.getElementById("mensaje").innerHTML = "";
        document.getElementById("numero").value = "";
        document.body.style.backgroundColor = "#fff";
        document.getElementById("boton").disabled = false;
    }