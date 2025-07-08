# Login-web.github.io
login web

![image](https://github.com/user-attachments/assets/7c9f0350-6993-4fc3-80b3-5141c466fc02)


Para el siguiente trabajo de programacion web elaboramos un login en html, añadiendo metodos de verificacion y registro de datos.
index.html: El menú de navegación principal incluye:

Inicio
Sobre mí
Proyectos
Contacto

Login.html: solo es un formulario de login/registro.

Plantilla utilizada
Pare el Logine no se uso una plantilla específica de login, sino un diseño propio con Bootstrap.

Descripción de cada sección

Index.html
Logo: Imagen circular en la parte superior.
Formulario de inicio de sesión: Campos para correo y contraseña, botón para ingresar y enlace para registrarse.
Formulario de registro: (oculto por defecto) Campos para nombre, correo, contraseña y repetir contraseña, botón para registrar y enlace para volver al login.
Mensajes: Área para mostrar mensajes de error o información.
Redirección: Al iniciar sesión, redirige a index.html.

Metodos de validacion de correo:

En el registro (index.html)
Correo electrónico:
Se usa el atributo HTML type="email" en el input, lo que valida automáticamente que el formato sea de correo electrónico (por ejemplo, que contenga un @ y un dominio).
El atributo required obliga a que el campo no esté vacío antes de enviar el formulario.
Contraseña:
El campo de contraseña también tiene el atributo required, por lo que no puede estar vacío.
const pass = document.getElementById('registerPassword').value;
const repeat = document.getElementById('repeatPassword').value;
if (pass !== repeat) {
  alert('Las contraseñas no coinciden. Por favor, corrige el error.');
  return;
}


capturas de previsualizacion:

Login.html  
![image](https://github.com/user-attachments/assets/7fa17122-3ecf-4a55-8601-db6ad7651814)
![image](https://github.com/user-attachments/assets/caef22b7-266a-491c-8309-cdd64d883f59)
![image](https://github.com/user-attachments/assets/196ed4b9-e3b4-4771-8df2-b958aa637198)
