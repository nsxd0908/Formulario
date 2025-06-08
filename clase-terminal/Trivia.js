const preguntas = [
             
            { pregunta: "¿Cuál es la capital de Italia?", opciones: ["Roma", "Milán", "Venecia"], respuesta: 0 },
            { pregunta: "¿Qué es la fotosíntesis?", opciones: ["Proceso de respiración", "Proceso de producción de energía en plantas", "Proceso de digestión"], respuesta: 1 },
            { pregunta: "¿Quién escribió 'Cien años de soledad'?", opciones: ["Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges"], respuesta: 0 },
            { pregunta: "¿Cuál es el elemento químico con símbolo O?", opciones: ["Oro", "Oxígeno", "Osmio"], respuesta: 1 },
            { pregunta: "¿Qué país ganó la Copa Mundial de Fútbol en 2018?", opciones: ["Alemania", "Francia", "Brasil"], respuesta: 1 },
            { pregunta: "¿Cuál es el océano más pequeño del mundo?", opciones: ["Ártico", "Índico", "Atlántico"], respuesta: 0 },
    { pregunta: "¿Cuál es el océano más grande?", opciones: ["Atlántico", "Pacífico", "Índico"], respuesta: 1 },
            { pregunta: "¿Cuál es la capital de Francia?", opciones: ["Madrid", "París", "Berlín"], respuesta: 1 },
            { pregunta: "¿Qué es el ADN?", opciones: ["Ácido desoxirribonucleico", "Ácido ribonucleico", "Proteína"], respuesta: 0 },
            { pregunta: "¿Quién descubrió la penicilina?", opciones: ["Einstein", "Fleming", "Curie"], respuesta: 1 },
            { pregunta: "¿Cuál es el continente más grande?", opciones: ["África", "Asia", "América"], respuesta: 1 },
            { pregunta: "¿Qué instrumento mide la temperatura?", opciones: ["Barómetro", "Termómetro", "Higrómetro"], respuesta: 1 },
            { pregunta: "¿Quién fue el primer presidente de los Estados Unidos?", opciones: ["Lincoln", "Washington", "Jefferson"], respuesta: 1 },
            { pregunta: "¿Cuál es el río más largo del mundo?", opciones: ["Amazonas", "Nilo", "Yangtsé"], respuesta: 0 }, 
            { pregunta: "¿Qué planeta es conocido como el planeta rojo?", opciones: ["Venus", "Marte", "Júpiter"], respuesta: 1 },
            { pregunta: "¿Cuál es la capital de España?", opciones: ["Barcelona", "Madrid", "Valencia"], respuesta: 1 },
            { pregunta: "¿Qué órgano del cuerpo humano bombea sangre?", opciones: ["Hígado", "Corazón", "Riñón"], respuesta: 1 },
            { pregunta: "¿Quién pintó 'La última cena'?", opciones: ["Da Vinci", "Michelangelo", "Raphael"], respuesta: 0 },
            { pregunta: "¿Cuál es el idioma más hablado del mundo?", opciones: ["Inglés", "Chino mandarín", "Español"], respuesta: 1 },
            { pregunta: "¿Qué gas forma la mayor parte de la atmósfera terrestre?", opciones: ["Oxígeno", "Nitrógeno", "Dióxido de carbono"], respuesta: 1 },
            { pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?", opciones: ["Cervantes", "Shakespeare", "Borges"], respuesta: 0 },
            { pregunta: "¿Cuántos planetas hay en el Sistema Solar?", opciones: ["8", "9", "10"], respuesta: 0 },
            { pregunta: "¿Cuál es la capital de Japón?", opciones: ["Pekín", "Tokio", "Seúl"], respuesta: 1 },
            { pregunta: "¿Qué gas es necesario para la respiración humana?", opciones: ["Oxígeno", "Nitrógeno", "Hidrógeno"], respuesta: 0 },
            { pregunta: "¿En qué año llegó el hombre a la Luna?", opciones: ["1965", "1969", "1971"], respuesta: 1 },
            { pregunta: "¿Cuál es el país más grande del mundo?", opciones: ["Canadá", "Rusia", "China"], respuesta: 1 },
            { pregunta: "¿Quién pintó la Mona Lisa?", opciones: ["Van Gogh", "Leonardo da Vinci", "Picasso"], respuesta: 1 },
            { pregunta: "¿Cuál es el metal más liviano?", opciones: ["Aluminio", "Litio", "Plomo"], respuesta: 1 },
            { pregunta: "¿Cuántas patas tiene una araña?", opciones: ["6", "8", "10"], respuesta: 1 }

            
        ];

        let preguntasUsadas = [];
        let preguntaActual;

        function elegirPreguntaAleatoria() {
            if (preguntasUsadas.length === preguntas.length) {
                document.getElementById("pregunta").innerHTML = "¡Juego terminado!";
                let botones = document.querySelectorAll("button");
                for (let boton of botones) {
                    boton.style.display = "none"; // Ocultar los botones
                }
                return;
            }

            do {
                preguntaActual = Math.floor(Math.random() * preguntas.length);
            } while (preguntasUsadas.includes(preguntaActual));

            preguntasUsadas.push(preguntaActual);
            mostrarPregunta();
        }

        function mostrarPregunta() {
            let preguntaElemento = document.getElementById("pregunta");
            let botones = document.querySelectorAll("button");

            preguntaElemento.innerHTML = preguntas[preguntaActual].pregunta;

            for (let i = 0; i < botones.length; i++) {
                botones[i].innerHTML = preguntas[preguntaActual].opciones[i];
                botones[i].classList.remove("correcto", "incorrecto");
            }
        }

        function verificarRespuesta(opcionSeleccionada) {
            let botones = document.querySelectorAll("button");
            let mensaje = document.getElementById("mensaje");

            if (opcionSeleccionada === preguntas[preguntaActual].respuesta) {
                mensaje.innerHTML = "✅ ¡Correcto!";
                mensaje.style.color = "green";
                botones[opcionSeleccionada].classList.add("correcto");
            } else {
                mensaje.innerHTML = "❌ Incorrecto, intenta otra vez.";
                mensaje.style.color = "red";
                botones[opcionSeleccionada].classList.add("incorrecto");
            }

            setTimeout(() => {
                elegirPreguntaAleatoria();
            }, 1000);
        }

        elegirPreguntaAleatoria();
