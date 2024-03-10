// Función para encriptar el texto
function encriptar(traduccion) {
  console.log("Encriptando...");
  // Eliminar cualquier estilo aplicado al elemento de advertencia
  document.querySelector("#warning").removeAttribute("style");

  // Obtener el texto ingresado por el usuario
  var textarea = document.querySelector("#texto");
  const texto = textarea.value;
  console.log("Texto ingresado:", texto);

  // Obtener elementos del DOM para manipular el resultado
  var area_default = document.querySelector("#default");
  var area_result = document.querySelector("#result");
  var texto_out = document.querySelector("#texto_out");

  // Verificar si el texto no está vacío
  if (texto != "") {
    var out = "";
    // Recorrer cada letra del texto ingresado
    for (var i = 0; i < texto.length; i++) {
      // Verificar si el carácter no es una letra minúscula o un espacio
      if ((texto[i] < "a" || texto[i] > "z") && texto[i] != " ") {
        // Mostrar advertencia y devolver si no cumple con las condiciones requeridas
        console.log("Error: Carácter no válido encontrado.");
        document.querySelector("#warning").style.color = "red";
        document.querySelector("#warning").style.fontSize = "16px";
        return;
      }
      // Verificar si el texto consiste solo en espacios
      else if (
        (texto.length == 1 && texto == " ") ||
        texto.replace(/ /g, "") == ""
      ) {
        // Mostrar mensaje predeterminado si solo hay espacios
        console.log("El texto ingresado contiene solo espacios.");
        area_default.classList.remove("invisible");
        area_result.classList.add("invisible");
        return;
      }
      // Encriptar letras
      if (texto[i] == "a") {
        out += traduccion["a"];
      } else if (texto[i] == "e") {
        out += traduccion["e"];
      } else if (texto[i] == "i") {
        out += traduccion["i"];
      } else if (texto[i] == "o") {
        out += traduccion["o"];
      } else if (texto[i] == "u") {
        out += traduccion["u"];
      } else {
        // si no es vocal
        out += texto[i];
      }
    }

    // Ocultar mensaje predeterminado y mostrar resultado en el área correspondiente
    console.log("Texto encriptado:", out);
    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");
    texto_out.innerHTML = out;
  }

  return;
}

// Función para desencriptar el texto
function desencriptar(traduccion) {
  console.log("Desencriptando...");
  // Eliminar cualquier estilo aplicado al elemento de advertencia
  document.querySelector("#warning").removeAttribute("style");

  // Obtener el texto ingresado por el usuario
  var textarea = document.querySelector("#texto");
  var texto = textarea.value;
  console.log("Texto ingresado:", texto);

  // Obtener elementos del DOM para manipular el resultado
  var area_default = document.querySelector("#default");
  var area_result = document.querySelector("#result");
  var texto_out = document.querySelector("#texto_out");

  // Verificar si el texto no está vacío
  if (texto != "") {
    // Verificar si el texto no cumple con las condiciones requeridas
    for (var i = 0; i < texto.length; i++) {
      if ((texto[i] < "a" || texto[i] > "z") && texto[i] != " ") {
        // Mostrar advertencia y devolver si no cumple con las condiciones requeridas
        console.log("Error: Carácter no válido encontrado.");
        document.querySelector("#warning").style.color = "red";
        document.querySelector("#warning").style.fontSize = "16px";
        return;
      }
      // Verificar si el texto consiste solo en espacios
      else if (
        (texto.length == 1 && texto == " ") ||
        texto.replace(/ /g, "") == ""
      ) {
        // Mostrar mensaje predeterminado si solo hay espacios
        console.log("El texto ingresado contiene solo espacios.");
        area_default.classList.remove("invisible");
        area_result.classList.add("invisible");
        return;
      }
    }

    // Ocultar mensaje predeterminado y mostrar resultado en el área correspondiente
    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");

    // Desencriptar el texto utilizando las reglas definidas en el objeto 'traduccion'
    texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
    texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
    texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
    texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
    texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");

    // Mostrar el texto desencriptado en el área de resultado
    console.log("Texto desencriptado:", texto);
    texto_out.innerHTML = texto;
  }
  return;
}

// Función para copiar el texto resultante al portapapeles
function clipboard() {
  console.log("Copiando...");
  const texto_out = document.querySelector("#texto_out");
  navigator.clipboard.writeText(texto_out.value);
}

// Definir objeto 'traduccion' que contiene las reglas de encriptación
const traduccion = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

// Evlist encriptar, desencriptar y copiar
const enc = document.querySelector("#enc");
const des = document.querySelector("#des");
const copy = document.querySelector("#copiar");

enc.addEventListener("click", function () {
  encriptar(traduccion);
});
des.addEventListener("click", function () {
  desencriptar(traduccion);
});
copy.addEventListener("click", function () {
  clipboard();
});
