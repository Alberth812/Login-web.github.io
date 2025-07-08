# Login-web.github.io
login web

![image](https://github.com/user-attachments/assets/4500658b-602a-4153-8e85-c45072e78ba1)


Para el siguiente trabajo de programacion web elaboramos un login en html, añadiendo metodos de verificacion y registro de datos.
index.html: 


El menú de navegación principal incluye:

Inicio de sesion
Registro de usuario



Login.html: solo es un formulario de login/registro.

Plantilla utilizada: 
Pare el Login no se uso una plantilla específica de login, sino un diseño propio con Bootstrap.



Descripción de cada sección



Index.html

Logo: Imagen circular en la parte superior.

Formulario de inicio de sesión: Campos para correo y contraseña, botón para ingresar y enlace para registrarse.

Formulario de registro: (oculto por defecto) Campos para nombre, correo, contraseña y repetir contraseña, botón para registrar y enlace para volver al 


login:

Mensajes: Área para mostrar mensajes de error o información.

Redirección: Al iniciar sesión, redirige a portafolio.html.




Estilos:

Principales estilos del login (index.html) en su archivo styles.css:

body: Fondo con degradado suave y texto negro.

.bg-image: Imagen de fondo fija, desenfocada y con opacidad, cubriendo toda la pantalla.

.custom-card: Tarjeta principal del login con bordes redondeados, sombra suave y fondo blanco.

.card-body: Espaciado interno amplio para el contenido de la tarjeta.

.logo-circle: El logo se muestra circular, con sombra y ajustado al espacio.




Botones (.btn-primary, .btn-success):

Degradados suaves, sin bordes, colores de texto gris oscuro.

Efectos hover para resaltar al pasar el mouse.

Campos de formulario (.form-control:focus): Borde y sombra azulada al enfocar.

#formTitle: Color de título oscuro

#msg: Espacio reservado para mensajes de error o éxito.

.custom-header, .custom-btn, .custom-body: Clases auxiliares para personalizar aún más el diseño (puedes usarlas para encabezados, botones y fondos secundarios).




Implementacion del JS (login.js)

Este archivo controla la lógica de interacción de los formularios de login y registro en tu página principal (index.html). Sus funciones principales son:

1. Alternar entre formularios
Cuando el usuario hace clic en “¿No tienes cuenta? Regístrate”, oculta el formulario de login y muestra el de registro, cambiando el título a “Registrarse”.
Cuando el usuario hace clic en “¿Ya tienes cuenta? Inicia sesión”, oculta el formulario de registro y muestra el de login, cambiando el título a “Iniciar Sesión”.
2. Login (Iniciar sesión)
Cuando el usuario envía el formulario de login, la página redirige automáticamente a portafolio.html.
No valida usuario/contraseña, solo redirige (esto es solo una simulación de login).
3. Registro
Al enviar el formulario de registro, compara las contraseñas escritas en los campos “Contraseña” y “Repetir contraseña”.
Si no coinciden, muestra una alerta de error.
Si coinciden, muestra un mensaje de éxito (“¡Registro exitoso! Ahora puedes iniciar sesión.”), espera 2 segundos y luego vuelve a mostrar el formulario de login.
4. Mensajes
Usa el div con id msg para mostrar mensajes de éxito o error.

   

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
