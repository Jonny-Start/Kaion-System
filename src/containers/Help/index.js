import React from "react";
import "./Help.css";
import { BasicLayout } from "../../components/BasicLayout";

function Help() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <BasicLayout idContent="Help" backgroundImage={true}>
      <div className="accordion">
        <div
          className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}
          key={1}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(1)}>
            <h3>¿Cómo puedo crear un nuevo proyecto?</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>
              Para crear un nuevo proyecto en Kaion System, debes realizar los
              siguientes pasos:
              <br />
              1. Inicia sesión en Kaion System: Accede al sistema utilizando tus
              credenciales de usuario proporcionadas por el administrador del
              sistema.
              <br />
              2. Navega al módulo de proyectos: Dentro del menú principal de
              Kaion System, busca y selecciona la opción del menú llamada
              "Proyecto".
              <br />
              3. Crea un nuevo proyecto: Dentro del módulo de proyectos, busca
              la opción "Crear nuevo proyecto".
              <br />
              4. Se desplegará un Popup en el que debes llenar los datos (todos
              son obligatorios): * Establece fechas y plazos: Define las fechas
              de inicio y finalización del proyecto, así como cualquier hito o
              plazo intermedio que sea necesario. Estos datos ayudarán a
              gestionar la planificación y el seguimiento del proyecto. * Asigna
              recursos: Asigna los recursos necesarios para el proyecto, como
              los miembros del equipo, proveedores externos o cualquier otro
              recurso requerido. Puedes asignar responsabilidades específicas a
              cada recurso y definir su nivel de participación en el proyecto. *
              Define el presupuesto: Establece el presupuesto asignado al
              proyecto, incluyendo los costos estimados para cada actividad o
              tarea.
              <br />
              5. Guarda y confirma el proyecto: Una vez que hayas completado
              todos los detalles, guarda y confirma la creación del nuevo
              proyecto. Esto creará el registro del proyecto dentro de Kaion
              System y permitirá comenzar a trabajar en él.
            </p>
          </div>
        </div>

        <div
          className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}
          key={2}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(2)}>
            <h3>¿Cómo puedo registrar horas?</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>
              Para registrar horas dentro de Kaion System, sigue estos pasos:
              <br />
              1. Inicia sesión en Kaion System: Accede al sistema utilizando tus
              credenciales de usuario proporcionadas por el administrador del
              sistema.
              <br />
              2. Navega al módulo de horas: Dentro del menú principal de Kaion
              System, busca y selecciona la opción del menú llamada "Horas".
              <br /> 3. Selecciona el proyecto correspondiente: Si tienes varios
              proyectos asignados, elige el proyecto específico en el que deseas
              registrar las horas. Esto te permitirá asociar correctamente las
              horas registradas al proyecto correspondiente.
              <br />
              4. Ingresa los detalles de la actividad: Dentro del módulo de
              registro de horas, encuentra la opción para agregar una nueva
              actividad o tarea. Ingresa los detalles de la actividad, como el
              nombre de la tarea, la descripción y cualquier otro campo
              requerido.
              <br />
              5. Guarda el registro de horas: Una vez que hayas completado los
              campos necesarios, guarda el registro de horas. Esto almacenará la
              información en Kaion System y la asociará al proyecto.
            </p>
          </div>
        </div>

        <div
          className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}
          key={3}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(3)}>
            <h3>¿Cómo puedo cambiar mi contraseña?</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>
              Para cambiar tu contraseña en Kaion System, sigue estos pasos:
              <br />
              1. Inicia sesión en Kaion System: Accede al sistema utilizando tus
              credenciales de usuario proporcionadas por el administrador del
              sistema.
              <br />
              2. Accede a la configuración de tu cuenta: Una vez que hayas
              iniciado sesión, busca la opción "Perfil".
              <br />
              3. Encuentra la opción de cambio de contraseña: Dentro de la
              opción "Perfil", busca el botón "Cambiar contraseña".
              <br />
              4. Verifica tu identidad: Para garantizar la seguridad de tu
              cuenta, es posible que se te solicite verificar tu identidad
              proporcionando la contraseña actual. * Ingresa la contraseña
              actual: Para proceder con el cambio de contraseña, se te
              solicitará que ingreses tu contraseña actual como medida de
              seguridad adicional. * Ingresa la nueva contraseña: A
              continuación, ingresa la nueva contraseña que deseas establecer.
              Asegúrate de crear una contraseña segura, que combine letras
              mayúsculas y minúsculas, números y caracteres especiales. Evita
              utilizar contraseñas fáciles de adivinar o información personal. *
              Confirma la nueva contraseña: Vuelve a ingresar la nueva
              contraseña en un campo de confirmación para asegurarte de que no
              haya errores de escritura.
              <br />
              5. Guarda los cambios: Una vez que hayas ingresado la nueva
              contraseña y confirmado correctamente, busca la opción para
              guardar los cambios. Esto actualizará tu contraseña en Kaion
              System. Verifica el cambio de contraseña: Después de guardar los
              cambios, cierra la sesión actual y vuelve a iniciar sesión en
              Kaion System utilizando tu nueva contraseña. Esto te permitirá
              verificar que el cambio de contraseña se haya realizado
              correctamente.
            </p>
          </div>
        </div>

        <div
          className={`accordion-item ${activeIndex === 4 ? "active" : ""}`}
          key={4}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(4)}>
            <h3>¿Cómo puedo conectarme a mi API Rest?</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>
              Para conectarte a la API REST de Kaion System con otras
              aplicaciones, sigue estos pasos generales:
              <br />
              1. Obtén las credenciales de la API: Para acceder a la API REST de
              Kaion System, es posible que necesites obtener credenciales de
              autenticación, estas se encuentran en la opción "Conectar a API".
              <br />
              2. Familiarízate con la documentación de la API: Revisa la
              documentación proporcionada por Kaion System que describe los
              endpoints, los métodos admitidos, los parámetros y la estructura
              de las solicitudes y respuestas de la API. Esto te ayudará a
              comprender cómo interactuar con la API y qué datos puedes obtener
              o enviar.
              <br />
              3. Elige el lenguaje de programación o la herramienta adecuada:
              Decide qué lenguaje de programación o herramienta utilizarás para
              conectarte a la API de Kaion System. Puedes elegir entre una
              amplia gama de opciones, como Python, JavaScript, Java, cURL u
              otras herramientas y bibliotecas específicas de API.
              <br />
              4. Implementa la conexión a la API: Utiliza el lenguaje de
              programación o la herramienta elegida para implementar la conexión
              a la API de Kaion System. Esto implicará enviar solicitudes HTTP a
              los endpoints correspondientes, incluyendo las credenciales de
              autenticación en las cabeceras de las solicitudes según lo
              requerido.
              <br />
              5. Maneja las respuestas de la API: Procesa las respuestas
              recibidas de la API de Kaion System de acuerdo con la estructura y
              el formato especificados en la documentación de la API. Esto puede
              implicar extraer datos relevantes, realizar análisis o realizar
              acciones adicionales en función de las necesidades de tu
              aplicación.
              <br />
              6. Realiza pruebas y depuración: Prueba tu integración con la API
              de Kaion System para asegurarte de que funcione correctamente.
              Realiza pruebas exhaustivas de diferentes escenarios y verifica si
              obtienes los resultados esperados. Si encuentras problemas,
              realiza la depuración necesaria y corrige los errores.
              <br />
              7. Mantén la seguridad y la confidencialidad: Asegúrate de
              implementar las medidas de seguridad necesarias al conectarte a la
              API de Kaion System. Utiliza conexiones seguras (HTTPS), maneja
              adecuadamente las credenciales de autenticación y cumple con las
              prácticas recomendadas de seguridad de API. Recuerda que los
              detalles específicos de la conexión a la API de Kaion System
              pueden variar según la documentación y la configuración del
              sistema. Siempre es recomendable consultar la documentación
              oficial de la API o contactar al soporte de Kaion System para
              obtener información precisa y actualizada sobre cómo conectarse a
              su API REST.
            </p>
          </div>
        </div>

        <div
          className={`accordion-item ${activeIndex === 5 ? "active" : ""}`}
          key={5}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(5)}>
            <h3>¿Cómo asignar tareas?</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>
              Para asignar tareas en Kaion System, sigue estos pasos:
              <br />
              1. Inicia sesión en Kaion System: Accede al sistema utilizando tus
              credenciales de usuario proporcionadas por el administrador del
              sistema.
              <br />
              2. Navega al módulo de horas: Dentro del menú principal de Kaion
              System, busca y selecciona la opción del menú llamada "Tareas".
              <br />
              3. Crea una nueva tarea: Dentro del módulo de gestión de tareas,
              busca la opción "Crear nueva tarea" o un botón similar para
              iniciar el proceso de creación de una tarea.
              <br />
              4. Completa los detalles de la tarea: Ingresa la información
              requerida para la nueva tarea, como el nombre de la tarea, la
              descripción, la fecha de vencimiento y cualquier otro dato
              relevante. Puedes utilizar campos predeterminados o
              personalizados, según la configuración del sistema.
              <br />
              5. Asigna la tarea a un usuario: Indica a qué usuario o miembro
              del equipo deseas asignar la tarea. Puedes buscar y seleccionar el
              nombre del usuario en una lista desplegable o utilizar otro método
              proporcionado por Kaion System para asignar la tarea.
              <br />
              6. Define la prioridad y otras propiedades de la tarea: Establece
              la prioridad de la tarea, ya sea alta, media o baja, según la
              importancia y urgencia. Además, puedes establecer otras
              propiedades como el estado (pendiente, en progreso, completada) y
              etiquetas para organizar y filtrar las tareas.
              <br />
              7. Asigna recursos y establece plazos: Si la tarea requiere
              recursos adicionales o tiene plazos específicos, puedes asignar
              recursos o establecer fechas límite adicionales en los campos
              correspondientes. Esto ayudará a organizar y controlar el trabajo
              relacionado con la tarea.
              <br />
              8. Guarda la tarea asignada: Una vez que hayas completado todos
              los detalles, guarda la tarea asignada. Esto creará un registro de
              la tarea en Kaion System y notificará al usuario asignado sobre la
              nueva tarea.
            </p>
          </div>
        </div>

        <div
          className={`accordion-item ${activeIndex === 6 ? "active" : ""}`}
          key={6}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(6)}>
            <h3>¿Cómo crear tareas?</h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>
              Para crear tareas en Kaion System, sigue estos pasos:
              <br />
              1. Inicia sesión en Kaion System: Accede al sistema utilizando tus
              credenciales de usuario proporcionadas por el administrador del
              sistema.
              <br />
              2. Navega al módulo de horas: Dentro del menú principal de Kaion
              System, busca y selecciona la opción del menú llamada "Tareas".
              <br />
              3. Crea una nueva tarea: Dentro del módulo de gestión de tareas,
              busca la opción "Crear nueva tarea" o un botón similar para
              iniciar el proceso de creación de una tarea.
              <br />
              4. Completa los detalles de la tarea: Ingresa la información
              requerida para la nueva tarea, como el nombre de la tarea, la
              descripción, la fecha de vencimiento y cualquier otro dato
              relevante. Puedes utilizar campos predeterminados o
              personalizados, según la configuración del sistema.
              <br />
              5. Asigna la tarea a un usuario: Indica a qué usuario o miembro
              del equipo deseas asignar la tarea. Puedes buscar y seleccionar el
              nombre del usuario en una lista desplegable o utilizar otro método
              proporcionado por Kaion System para asignar la tarea.
              <br />
              6. Define la prioridad y otras propiedades de la tarea: Establece
              la prioridad de la tarea, ya sea alta, media o baja, según la
              importancia y urgencia. Además, puedes establecer otras
              propiedades como el estado (pendiente, en progreso, completada) y
              etiquetas para organizar y filtrar las tareas.
              <br />
              7. Asigna recursos y establece plazos: Si la tarea requiere
              recursos adicionales o tiene plazos específicos, puedes asignar
              recursos o establecer fechas límite adicionales en los campos
              correspondientes. Esto ayudará a organizar y controlar el trabajo
              relacionado con la tarea.
              <br />
              8. Guarda la tarea creada: Una vez que hayas completado todos los
              detalles, guarda la tarea creada. Esto creará un registro de la
              tarea en Kaion System y notificará a los usuarios asignados sobre
              la nueva tarea.
            </p>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

export { Help };
