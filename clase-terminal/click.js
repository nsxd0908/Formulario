   let contador = 0;
        let tiempoRestante = 5;
        let juegoActivo = false;

        function iniciarJuego() {
            contador = 0;
            tiempoRestante = 5;
            juegoActivo = true;
            document.getElementById("resultado").innerHTML = "";
            document.getElementById("clickArea").disabled = false;
            
            let intervalo = setInterval(() => {
                tiempoRestante--;
                if (tiempoRestante <= 0) {
                    clearInterval(intervalo);
                    terminarJuego();
                }
            }, 1000);
        }

        function contarClick() {
            if (juegoActivo) {
                contador++;
            }
        }

        function terminarJuego() {
            juegoActivo = false;
            document.getElementById("clickArea").disabled = true;
            document.getElementById("resultado").innerHTML = `🔥 Lograste ${contador} clics en 5 segundos.`;
        }
