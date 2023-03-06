function validarFormulario() {
  // CAMPO NOMBRE
  let nombre = document.getElementById("nombre").value;

  if (nombre == null || nombre == "") {
    alert("El campo nombre está vacio");
    return false;
  }

  let valido = true;
  for (let i = 0; i < nombre.length; i++) {
    let caracter = nombre.charAt(i);
    if (
      !(
        (caracter >= "a" && caracter <= "z") ||
        (caracter >= "A" && caracter <= "Z") ||
        caracter == " "
      )
    ) {
      valido = false;
    }
  }
  if (!valido) {
    alert("El nombre solo puede contener letras y espacios.");
    return false;
  }

  // CAMPO CORREO

  let correo = document.getElementById("correo").value;

  let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (correo == null || correo == "") {
    alert("El campo correo está vacio");
    return false;
  }

  if (patron.test(correo)) {
  } else {
    alert(
      "El correo electrónico es inválido. Por favor, ingrese un correo electrónico válido."
    );
  }

  //   CAMPO DNI

  const dni = document.getElementById("dni").value.toUpperCase();

  if (dni == null || dni == "") {
    alert("El campo DNI está vacio");
    return false;
  }
  if (/^[0-9]{8}[A-Z]$/.test(dni)) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letra = letras.charAt(parseInt(dni.substring(0, 8)) % 23);
    if (letra === dni.charAt(8)) {
    } else {
      alert("El número de DNI no es válido.");
    }
  } else {
    alert("El número de DNI no tiene el formato correcto.");
  }

  alert("El formulario es correcto");
  return true;
}
