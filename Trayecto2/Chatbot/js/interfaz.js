/*
 * Código de la INTERFAZ: pinta las burbujas, maneja el formulario y el scroll.
 * No contiene reglas del chatbot; esas viven en chatbot.js → responder().
 */

const zonaMensajes = document.getElementById("mensajes");
const estadoVacio = document.getElementById("estado-vacio");
const formulario = document.getElementById("formulario");
const entrada = document.getElementById("entrada");
const btnEnviar = document.getElementById("btn-enviar");
const btnLimpiar = document.getElementById("btn-limpiar");

const ESTILOS = {
  usuario: "self-end rounded-br-sm bg-indigo-600 text-white",
  bot: "self-start rounded-bl-sm bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100",
};

// Crea una burbuja y la agrega al chat. autor: "usuario" | "bot"
function agregarMensaje(texto, autor) {
  estadoVacio.classList.add("hidden");

  const burbuja = document.createElement("div");
  burbuja.className =
    "max-w-[80%] whitespace-pre-wrap break-words rounded-2xl px-4 py-2.5 text-sm leading-relaxed " +
    ESTILOS[autor];
  burbuja.textContent = texto; // textContent evita inyectar HTML

  zonaMensajes.appendChild(burbuja);
  zonaMensajes.scrollTop = zonaMensajes.scrollHeight;
  return burbuja;
}

// Burbuja con tres puntos animados mientras el bot "escribe"
function mostrarEscribiendo() {
  const burbuja = agregarMensaje("", "bot");
  burbuja.setAttribute("aria-label", "El bot está escribiendo");
  burbuja.innerHTML = `
    <span class="flex gap-1 py-1">
      <span class="size-2 animate-bounce rounded-full bg-slate-400"></span>
      <span class="size-2 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]"></span>
      <span class="size-2 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]"></span>
    </span>`;
  return burbuja;
}

async function enviar(texto) {
  texto = texto.trim();
  if (!texto || btnEnviar.disabled) return;

  agregarMensaje(texto, "usuario");
  entrada.value = "";
  ajustarAltura();
  btnEnviar.disabled = true;

  const escribiendo = mostrarEscribiendo();
  let respuesta;
  try {
    // Pequeña pausa para que se sienta natural; luego se consulta tu lógica.
    await new Promise((listo) => setTimeout(listo, 500));
    respuesta = await responder(texto);
  } catch (error) {
    console.error(error);
    respuesta = "Ocurrió un error al generar la respuesta. Revisa la consola.";
  }
  escribiendo.remove();
  agregarMensaje(String(respuesta ?? ""), "bot");

  btnEnviar.disabled = false;
  entrada.focus();
}

// La caja de texto crece con el contenido
function ajustarAltura() {
  entrada.style.height = "auto";
  entrada.style.height = entrada.scrollHeight + 2 + "px";
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  enviar(entrada.value);
});

// Enter envía, Shift+Enter hace salto de línea
entrada.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter" && !evento.shiftKey && !evento.isComposing) {
    evento.preventDefault();
    enviar(entrada.value);
  }
});

entrada.addEventListener("input", ajustarAltura);

document.querySelectorAll(".sugerencia").forEach((boton) => {
  boton.addEventListener("click", () => enviar(boton.textContent));
});

btnLimpiar.addEventListener("click", () => {
  zonaMensajes.querySelectorAll(":scope > :not(#estado-vacio)").forEach((nodo) => nodo.remove());
  estadoVacio.classList.remove("hidden");
  entrada.focus();
});

entrada.focus();
