# Parcial-Primer-Computo-progIV

¿Qué valor agregado tiene el uso de WebComponents en el proyecto?
El uso de WebComponents aporta modularidad y reutilización. Permite encapsular el formulario de presupuesto en un componente independiente, con su propio HTML, CSS y lógica en JavaScript. Esto facilita mantener el código ordenado, reutilizar el mismo formulario en distintas páginas y evitar conflictos de estilos o funciones con otros elementos del sitio.

¿De qué forma manipularon los datos sin recargar la página?
Se utilizó JavaScript con eventos (por ejemplo, submit) para capturar los datos ingresados en el formulario, procesarlos y mostrar el resultado directamente en pantalla. Todo ocurre en el navegador, sin necesidad de recargar la página, gracias al DOM dinámico que actualiza el contenido del área de resultados.

¿De qué forma validaron las entradas de datos?
Las entradas se validaron de dos maneras:

Validación HTML5: usando atributos como required y type="number".

Validación con JavaScript: comprobando que los campos no estén vacíos y que los valores numéricos sean correctos (isNaN para evitar datos inválidos). Si la validación falla, se muestra un mensaje de error en pantalla.

¿Cómo manejaría la escalabilidad futura en su página?
Para escalar el sistema en el futuro se pueden aplicar varias estrategias:

Modularidad con WebComponents: añadir nuevos formularios o componentes sin afectar los existentes.

Separación de capas: mantener HTML, CSS y JS en archivos independientes para facilitar mantenimiento.

Integración con bases de datos o APIs: permitir guardar presupuestos en un servidor y consultar históricos.

Diseño responsivo: adaptar la interfaz a móviles y tablets.

Buenas prácticas de código: uso de funciones reutilizables y documentación clara para que otros desarrolladores puedan ampliar el sistema fácilmente.
