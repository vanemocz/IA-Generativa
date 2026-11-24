# Chatbot — Trayecto 2

Interfaz de un chatbot hecha con HTML y Tailwind CSS (por CDN). La lógica del bot todavía no está implementada.

## Cómo abrirlo

Abre `index.html` en el navegador. No requiere instalación (sí conexión a internet, para cargar Tailwind).

## Estructura

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Estructura y estilos de la interfaz. |
| `js/chatbot.js` | **Lógica y reglas del chatbot.** Aquí se programa la función `responder(mensaje)`. |
| `js/interfaz.js` | Mueve la interfaz: burbujas, formulario, scroll. Llama a `responder()`. |

## Dónde agregar la lógica

En `js/chatbot.js`, dentro de `responder(mensaje)`: recibe el texto del usuario y devuelve el texto que contestará el bot.
