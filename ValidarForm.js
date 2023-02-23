//Tarea 5 DEWC
//autor: David Renes Tejado 71270642J ®
//version: 1.0
//***************************************************************************/
//***************************************************************************/

// Función para validar el formulario
let validar = () => {
      let okUsuario = validarUsuario();
      let okPass = validarPass();
      if (okUsuario && okPass == true)
            alert("Formulario validado correctamente");
      return false;
}






// Función para validar el nombre de usuario 
let validarUsuario = () => {
      let ok = true;
      let msgError = "";
      // Apuntamos a los campos del formulario
      let usuario = document.getElementById("usuario").value;
      let divUsuario = document.getElementById("divUsuario");
      let error = document.getElementsByClassName("error")[0];

      // Limpiamos los campos  
      divUsuario.style.border = "";
      error.innerHTML = "";

      //Hacemos nuestras condiciones
      if (usuario.length == 0) {  // Comprobamos que el campo no esté vacío 
            ok = false;
            msgError = "Este campo no puede estar vacío";
      }
      else
            if (/^\s+$/.test(usuario)) {  // Comprobamos que no esté compuesto sólo por espacios en blanco
                  ok = false;
                  msgError = "Este campo no puede contener sólo espacios en blanco";
            }
            else
                  if (/^\d+$/.test(usuario)) { // Comprobamos que no sea un número
                        ok = false;
                        msgError = "Este campo no puede ser un número";
                  }
                  else
                        if (/^([a-z]{3,12})$/.test(usuario)) {   // Si está compuesto por letras minúsculas y tiene entre 3 y 12 caracteres, es correcto
                              ok = true;
                        }
                        else {
                              ok = false;
                              msgError = "Este campo sólo admite texto compuesto exclusivamente por letras minúsculas y debe contener entre 3 y 12 caracteres. Ejem. david";
                        }

      if (!ok) {
            divUsuario.style.border = "2px solid red";
            error.innerHTML = msgError;
            return false;
      }
      return true;
}







// Función para validar la contraseña
let validarPass = () => {
      let ok = true;
      let msgError = "";
      // Apuntamos a los campos del formulario
      let pass = document.getElementById("pass").value;
      let divPass = document.getElementById("divPass");
      let error = document.getElementsByClassName("error")[1];

      // Limpiamos los campos
      divPass.style.border = "";
      error.innerHTML = "";

      //Hacemos nuestras condiciones
      if (pass.length == 0) {  // Comprobamos que el campo no esté vacío 
            ok = false;
            msgError = "Este campo no puede estar vacío";
      }
      else
            if (/^\s+$/.test(pass)) {  // Comprobamos que no esté compuesto sólo por espacios en blanco
                  ok = false;
                  msgError = "Este campo no puede contener sólo espacios en blanco";
            }
            else
                  if (!(/^[A-Z][.,-][a-z0-9]{6}$/.test(pass))) { // Comprobamos que tenga un formato válido según el enunciado de la tarea
                        ok = false;
                        msgError = "Este campo debe empezar por una letra mayúscula, seguida de uno de estos tres  caracteres especiales punto(.), coma(,) o guion medio(-), a continuación seis letras en minúscula, o seis números o combinación de ambos (letras y números). Ej. de contraseñas válidas: A.carbot, F,as14dg, H-951357.";
                  }

      if (!ok) {
            divPass.style.border = "2px solid red";
            error.innerHTML = msgError;
            return false;
      }
      return true;
}
//window.onload = validar;

